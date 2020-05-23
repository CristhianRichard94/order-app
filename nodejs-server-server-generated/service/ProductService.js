'use strict';
var Product = require('../models/Product')

/**
 * Add a new product to the database
 *
 * body Product Product object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addProduct = function(body) {
  return new Promise(function (resolve, reject) {
    let prod = new Product(body);
    prod.save((error, resp) => {
      if (error) {
        reject(error.message);
      } else {
        resolve(resp);
      }
    });
    resolve();
  });
}


/**
 * Finds products by name
 *
 * status String Name values that need to be considered for filter
 * returns List
 **/
exports.findProducts = function(status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "celiac" : true,
  "image" : "image",
  "amount" : 0.8008281904610115,
  "name" : "Pizza muzzarella",
  "id" : "5easdg798as87d",
  "stock" : 6.027456183070403,
  "productType" : { },
  "amountUnit" : "amountUnit",
  "productPrice" : {
    "amount" : 1.4658129805029452,
    "productId" : "5easdg798as87d",
    "id" : "5easdg798as87d",
    "creationDate" : "2000-01-23T04:56:07.000+00:00"
  }
}, {
  "celiac" : true,
  "image" : "image",
  "amount" : 0.8008281904610115,
  "name" : "Pizza muzzarella",
  "id" : "5easdg798as87d",
  "stock" : 6.027456183070403,
  "productType" : { },
  "amountUnit" : "amountUnit",
  "productPrice" : {
    "amount" : 1.4658129805029452,
    "productId" : "5easdg798as87d",
    "id" : "5easdg798as87d",
    "creationDate" : "2000-01-23T04:56:07.000+00:00"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find product by ID
 * Returns a single product
 *
 * productId String ID of product to return
 * returns Product
 **/
exports.getProductById = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "celiac" : true,
  "image" : "image",
  "amount" : 0.8008281904610115,
  "name" : "Pizza muzzarella",
  "id" : "5easdg798as87d",
  "stock" : 6.027456183070403,
  "productType" : { },
  "amountUnit" : "amountUnit",
  "productPrice" : {
    "amount" : 1.4658129805029452,
    "productId" : "5easdg798as87d",
    "id" : "5easdg798as87d",
    "creationDate" : "2000-01-23T04:56:07.000+00:00"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all products
 *
 * returns List
 **/
exports.getProducts = function() {
  return new Promise(function (resolve, reject) {
    Product.find({}).exec((err, products) => {
      if (err) {
        reject(err);
      } else {
        resolve(products);
      }
    });
  });
}


/**
 * Update an existing product
 *
 * body Product Product object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updateProduct = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an existing user
 *
 * body User UserState object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updateUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * uploads an image
 *
 * body Object  (optional)
 * productId String ID of product to update
 * returns ApiResponse
 **/
exports.uploadFile = function(body,productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "type" : "type",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

