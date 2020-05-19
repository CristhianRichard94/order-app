var express = require("express");
var app = express();
var jwt = require("jsonwebtoken");
var seed = require("../config/config").SEED;

/// VERIFY TOKEN
exports.tokenVerify = (req, res, next) => {
  var token = req.query.token;
  jwt.verify(token, seed, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        message: "invalid token",
        error: err
      });
    }
    req.user = decoded.user;
    next();
  });
};
