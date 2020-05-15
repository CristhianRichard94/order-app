import Schema from "mongoose";
import { ObjectId } from "mongodb";

export default ProductOrderSchema = new Schema({
  _id: ObjectId,
  amount: number,
  observations: String,
  productId: { type: ObjectId, ref: "Product" },
  productPriceId: { type: ObjectId, ref: "ProductPrice" },
});
