'use strict';


/**
 * Add a new order to the database
 *
 * body Order Order object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addOrder = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds orders by filters
 *
 * date Date date values that need to be considered for filter
 * table BigDecimal table number that need to be considered for filter
 * user User user that need to be considered for filter (optional)
 * returns List
 **/
exports.findOrders = function(date,table,user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "observartions" : "observartions",
  "cost" : 0.8008281904610115,
  "clientName" : "clientName",
  "id" : "id",
  "paidAmount" : 6.027456183070403,
  "userId" : "userId",
  "table" : {
    "number" : 1.4658129805029452,
    "description" : "description",
    "section" : {
      "number" : 5.962133916683182,
      "description" : "description",
      "id" : "id"
    },
    "id" : "id"
  },
  "orderState" : {
    "name" : "name",
    "description" : "description",
    "id" : "id"
  }
}, {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "observartions" : "observartions",
  "cost" : 0.8008281904610115,
  "clientName" : "clientName",
  "id" : "id",
  "paidAmount" : 6.027456183070403,
  "userId" : "userId",
  "table" : {
    "number" : 1.4658129805029452,
    "description" : "description",
    "section" : {
      "number" : 5.962133916683182,
      "description" : "description",
      "id" : "id"
    },
    "id" : "id"
  },
  "orderState" : {
    "name" : "name",
    "description" : "description",
    "id" : "id"
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
 * Get active Orders
 *
 * returns List
 **/
exports.getActiveOrders = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "observartions" : "observartions",
  "cost" : 0.8008281904610115,
  "clientName" : "clientName",
  "id" : "id",
  "paidAmount" : 6.027456183070403,
  "userId" : "userId",
  "table" : {
    "number" : 1.4658129805029452,
    "description" : "description",
    "section" : {
      "number" : 5.962133916683182,
      "description" : "description",
      "id" : "id"
    },
    "id" : "id"
  },
  "orderState" : {
    "name" : "name",
    "description" : "description",
    "id" : "id"
  }
}, {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "observartions" : "observartions",
  "cost" : 0.8008281904610115,
  "clientName" : "clientName",
  "id" : "id",
  "paidAmount" : 6.027456183070403,
  "userId" : "userId",
  "table" : {
    "number" : 1.4658129805029452,
    "description" : "description",
    "section" : {
      "number" : 5.962133916683182,
      "description" : "description",
      "id" : "id"
    },
    "id" : "id"
  },
  "orderState" : {
    "name" : "name",
    "description" : "description",
    "id" : "id"
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
 * Update an existing Order
 *
 * body Order Order object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updateOrder = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

