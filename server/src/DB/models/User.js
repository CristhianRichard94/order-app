import Schema from "mongoose";
import { ObjectId } from "mongodb";

export default UserSchema = new Schema({
  _id: ObjectId,
  name: String,
  phone: number,
  emergencyPhone: number,
  address: String,
  email: String,
  password: String,
  username: String,
  functionIds: [{ type: ObjectId, ref: "Function" }],
});
