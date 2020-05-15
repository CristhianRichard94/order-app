import Schema from 'mongoose';
import { ObjectId } from 'mongodb';

export default FunctionSchema = new Schema({
    _id: ObjectId,
    name: String
});