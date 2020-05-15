import Schema from "mongoose";
import { ObjectId } from "mongodb";

export default OrderSchema = new Schema({
  _id: ObjectId,
  clientName: String,
  cost: number,
  observations: String,
  tableNumber: String,
  date: Date,
  userId: { type: ObjectId, ref: "User" },
});
