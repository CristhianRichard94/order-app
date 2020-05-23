'use strict';


/**
 * Add a new productType to the database
 *
 * body ProductType ProductType object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addProductType = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all products
 *
 * returns List
 **/
exports.getProductTypes = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Pizza muzzarella",
  "description" : "Pizza that includes sauce and cheese",
  "id" : "5easdg798as87d",
  "products" : [ {
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
  } ]
}, {
  "name" : "Pizza muzzarella",
  "description" : "Pizza that includes sauce and cheese",
  "id" : "5easdg798as87d",
  "products" : [ {
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
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing product
 *
 * body ProductType ProductType object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updateProductType = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

