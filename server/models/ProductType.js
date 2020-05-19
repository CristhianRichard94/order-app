mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductTypeSchema = new Schema({
  name: { type: String, required: [true, "El nombre es requerido"] },
});
module.exports = mongoose.model("ProductType", ProductTypeSchema);
