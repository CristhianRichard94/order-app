var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrderStateSchema = new Schema({
  name: { type: String },
  description: { type: String },
});
module.exports = mongoose.model("OrderState", OrderSchema);
