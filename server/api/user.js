express = require("express");
var bcrypt = require("bcryptjs");
User = require("../models/user");
var auth = require("../middleware/auth");
var app = express();

/// GET USERS
app.get("/", (req, res, next) => {
  var offset = req.body.offset || 0;
  offset = Number(offset);

  User.find({}, "name email img role")
    .skip(offset)
    .limit(15)
    .exec((err, users) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          message: "failed getting users",
          error: err
        });
      }
      User.countDocuments({}, (error, count) => {
        res.status(200).json({ ok: true, users, count });
      });
    });
});

/// CREATE USER
app.post("/", auth.tokenVerify, (req, res) => {
  var { name, email, password, img, role } = req.body;
  var user = new User({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
    img,
    role
  });
  user.save((err, savedUser) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        message: "failed creating user",
        error: err
      });
    }
    savedUser.password = "";
    res.status(201).json({ ok: true, user: savedUser });
  });
});

/// UPDATE USER
app.put("/:id", auth.tokenVerify, (req, res) => {
  var { name, email, role } = req.body;
  var id = req.params.id;
  User.findById(id, (err, user) => {
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
        message: `user with id ${id} not found.`,
        error: { message: "user dont exist" }
      });
    }
    user.name = name;
    user.email = email;
    user.role = role;
    user.save((err, savedUser) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          message: "error updating user",
          error: err
        });
      }
      savedUser.password = "";
      res.status(200).json({
        ok: true,
        savedUser
      });
    });
  });
});

///DELETE USER
app.delete("/:id", auth.tokenVerify, (req, res) => {
  var id = req.params.id;

  User.findByIdAndRemove(id, (err, deletedUser) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: "error deleting user",
        error: err
      });
    }
    if (!deletedUser) {
      return res.status(400).json({
        ok: false,
        message: `doesnt exist an user with id ${id}`,
        error: err
      });
    }
    res.status(200).json({
      ok: true,
      user: deletedUser
    });
  });
});
module.exports = app;
