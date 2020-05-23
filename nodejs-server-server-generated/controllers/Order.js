'use strict';

var utils = require('../utils/writer.js');
var Order = require('../service/OrderService');

module.exports.addOrder = function addOrder (req, res, next, body) {
  Order.addOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findOrders = function findOrders (req, res, next, date, table, user) {
  Order.findOrders(date, table, user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActiveOrders = function getActiveOrders (req, res, next) {
  Order.getActiveOrders()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateOrder = function updateOrder (req, res, next, body) {
  Order.updateOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
