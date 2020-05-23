mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductPriceSchema = new Schema({
  amount: { type: String, required: [true, "El nombre es requerido"] },
  creationDate: { type: Date },
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
});
module.exports = mongoose.model("ProductPrice", ProductPriceSchema);
