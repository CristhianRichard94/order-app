var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Section = require("./Section");

var TableSchema = new Schema({
  number: { type: Number },
  description: { type: String },
  section: { type: Section }
});
module.exports = mongoose.model("Table", TableSchema);
