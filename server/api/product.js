express = require("express");
Product = require("../models/product");
var app = express();

app.get("/", (req, res, next) => {
  Product.find({}).exec((err, products) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: "failed getting products",
        error: err,
      });
    }
    Product.countDocuments({}, (error, count) => {
      res.status(200).json({ ok: true, products, count });
    });
  });
});

module.exports = app;
