'use strict';


/**
 * Add a new section to the database
 *
 * body Section Section object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addSection = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all sections
 *
 * returns List
 **/
exports.getSections = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "number" : 5.962133916683182,
  "description" : "description",
  "id" : "id"
}, {
  "number" : 5.962133916683182,
  "description" : "description",
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
 * Update an existing section
 *
 * body Section Section object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updateSection = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

