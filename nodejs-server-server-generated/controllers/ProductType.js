'use strict';

var utils = require('../utils/writer.js');
var ProductType = require('../service/ProductTypeService');

module.exports.addProductType = function addProductType (req, res, next, body) {
  ProductType.addProductType(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductTypes = function getProductTypes (req, res, next) {
  ProductType.getProductTypes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProductType = function updateProductType (req, res, next, body) {
  ProductType.updateProductType(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
