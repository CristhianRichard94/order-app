import Schema from 'mongoose';
import { ObjectId } from 'mongodb';

export default ProductPriceSchema = new Schema({
    _id: ObjectId,
    name: String,
    creationDate: Date,
    productId: { type: ObjectId, ref: "Product" }
});