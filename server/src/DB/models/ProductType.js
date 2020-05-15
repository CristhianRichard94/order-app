import Schema from 'mongoose';
import { ObjectId } from 'mongodb';

export default ProductTypeSchema = new Schema({
    _id: ObjectId,
    name: String
});