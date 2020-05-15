import Schema from "mongoose";
import { ObjectId } from "mongodb";

export default ProductSchema = new Schema({
  _id: ObjectId,
  name: String,
  amount: number,
  amountUnit: String,
  presentation: String,
  celiac: Boolean,
  productType: { type: ObjectId, ref: "ProductType" },
});
