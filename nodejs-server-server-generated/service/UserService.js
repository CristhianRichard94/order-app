'use strict';


/**
 * Add a new user to the database
 *
 * body User UserState object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds users by name
 *
 * status String Name values that need to be considered for filter
 * returns List
 **/
exports.findUser = function(status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "password" : "",
  "address" : "address",
  "phone" : 0.8008281904610115,
  "name" : "name",
  "id" : "id",
  "emergencyPhone" : 6.027456183070403,
  "email" : ""
}, {
  "password" : "",
  "address" : "address",
  "phone" : 0.8008281904610115,
  "name" : "name",
  "id" : "id",
  "emergencyPhone" : 6.027456183070403,
  "email" : ""
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find user by ID
 * Returns a single user
 *
 * userId String ID of product to return
 * returns User
 **/
exports.getUserById = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "",
  "address" : "address",
  "phone" : 0.8008281904610115,
  "name" : "name",
  "id" : "id",
  "emergencyPhone" : 6.027456183070403,
  "email" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all users
 *
 * returns List
 **/
exports.getUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "password" : "",
  "address" : "address",
  "phone" : 0.8008281904610115,
  "name" : "name",
  "id" : "id",
  "emergencyPhone" : 6.027456183070403,
  "email" : ""
}, {
  "password" : "",
  "address" : "address",
  "phone" : 0.8008281904610115,
  "name" : "name",
  "id" : "id",
  "emergencyPhone" : 6.027456183070403,
  "email" : ""
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

