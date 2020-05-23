'use strict';


/**
 * Add a new table to the database
 *
 * body Table Table object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addTable = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all tables
 *
 * returns List
 **/
exports.getTables = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "number" : 1.4658129805029452,
  "description" : "description",
  "section" : {
    "number" : 5.962133916683182,
    "description" : "description",
    "id" : "id"
  },
  "id" : "id"
}, {
  "number" : 1.4658129805029452,
  "description" : "description",
  "section" : {
    "number" : 5.962133916683182,
    "description" : "description",
    "id" : "id"
  },
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing table
 *
 * body Table Table object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updateTable = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

