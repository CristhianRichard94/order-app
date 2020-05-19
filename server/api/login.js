express = require("express");
var bcrypt = require("bcryptjs");
User = require("../models/user");
var jwt = require("jsonwebtoken");
var seed = require('../config/config').SEED;
var app = express();

app.post("/", (req, res) => {
    var { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: "error finding user",
        error: err
      });
    }
    if (!user) {
      return res.status(400).json({
        ok: false,
        message: "wrong credentials",
        error: err
      });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({
        ok: false,
        message: "wrong credentials",
        error: err
      });
    }
    user.password = null;
    var token = jwt.sign({user}, seed, {
      expiresIn: 14400
    });
    res.status(200).json({ ok: true, user, id: user.id, token });
  });
});

module.exports = app;
