mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductOrderSchema = new Schema({
  amount: { type: number },
  observations: { type: String },
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  productPriceId: { type: Schema.Types.ObjectId, ref: "ProductPrice" },
});

module.exports = mongoose.model("ProductOrder", ProductOrderSchema);
