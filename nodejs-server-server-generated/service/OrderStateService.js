'use strict';


/**
 * Add a new orderState to the database
 *
 * body OrderState Order State object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addOrderState = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all orderStates
 *
 * returns List
 **/
exports.getOrderStates = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "description" : "description",
  "id" : "id"
}, {
  "name" : "name",
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
 * Update an existing orderState
 *
 * body OrderState Order State object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updateOrderState = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

