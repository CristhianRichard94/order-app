'use strict';

var utils = require('../utils/writer.js');
var Table = require('../service/TableService');

module.exports.addTable = function addTable (req, res, next, body) {
  Table.addTable(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTables = function getTables (req, res, next) {
  Table.getTables()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTable = function updateTable (req, res, next, body) {
  Table.updateTable(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
