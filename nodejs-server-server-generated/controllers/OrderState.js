'use strict';

var utils = require('../utils/writer.js');
var OrderState = require('../service/OrderStateService');

module.exports.addOrderState = function addOrderState (req, res, next, body) {
  OrderState.addOrderState(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOrderStates = function getOrderStates (req, res, next) {
  OrderState.getOrderStates()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateOrderState = function updateOrderState (req, res, next, body) {
  OrderState.updateOrderState(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
