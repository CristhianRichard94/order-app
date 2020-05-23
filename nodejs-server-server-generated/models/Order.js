var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var OrderState = require("./OrderState")
var OrderSchema = new Schema({
  clientName: { type: String },
  observations: { type: String },
  tableNumber: { type: String },
  date: { type: Date },
  cost: { type: number },
  paidAmount: { type: number },
  state: {type: OrderState},
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Order", OrderSchema);
