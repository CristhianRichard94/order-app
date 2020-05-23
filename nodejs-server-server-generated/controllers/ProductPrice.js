'use strict';

var utils = require('../utils/writer.js');
var ProductPrice = require('../service/ProductPriceService');

module.exports.addProductPrice = function addProductPrice (req, res, next, body) {
  ProductPrice.addProductPrice(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
