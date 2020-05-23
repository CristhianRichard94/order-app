'use strict';

var utils = require('../utils/writer.js');
var Section = require('../service/SectionService');

module.exports.addSection = function addSection (req, res, next, body) {
  Section.addSection(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSections = function getSections (req, res, next) {
  Section.getSections()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSection = function updateSection (req, res, next, body) {
  Section.updateSection(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
