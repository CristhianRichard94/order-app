var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SectionSchema = new Schema({
  number: { type: Number },
  description: { type: String },
});
module.exports = mongoose.model("Section", SectionSchema);
