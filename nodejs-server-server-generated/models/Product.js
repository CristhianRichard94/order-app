mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: { type: String, required: [true, "El nombre es requerido"] },
  amount: {
    type: Number,
    required: [true, "La cantidad del producto es requerida"],
  },
  amountUnit: {
    type: String,
    required: [true, "La unidad de la cantidad es requerida"],
  },
  celiac: { type: Boolean },
  image: { type: String, required: [true, "La imagen es requerida"] },
  stock: { type: Number },
  productTypeId: { type: Schema.Types.ObjectId, ref: "ProductType" },
});
module.exports = mongoose.model("Product", ProductSchema);
