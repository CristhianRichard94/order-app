express = require("express");
User = require("../models/user");
var app = express();



app.get("/", (req, res, next) => {
    return res.status(200).json({
        message: 'app get successful'
    })
  });

  module.exports = app;