var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  clientName: { type: String },
  cost: { type: number },
  observations: { type: String },
  tableNumber: { type: String },
  date: { type: Date },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Order", OrderSchema);
