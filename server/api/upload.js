express = require("express");
var app = express();
var fileUpload = require("express-fileupload");
var User = require("../models/user");
var Product = require("../models/product");
var fs = require("fs");

app.use(fileUpload());
app.put("/:type/:id", (req, res, next) => {
  var { type, id } = req.params;

  var validTypes = ["users", "products"];
  if (!validTypes.includes(type)) {
    return res.status(400).json({
      ok: false,
      message: "Invalid collection type",
      error: "Invalid collection type",
    });
  }
  if (!req.files) {
    return res.status(400).json({
      ok: false,
      message: "No file selected",
      error: "No file selected",
    });
  }

  var file = req.files.image;
  var name = file.name.split(".");
  var extension = name[name.length - 1];

  var validExtensions = ["png", "jpg", "gif", "jpeg"];
  if (!validExtensions.includes(extension)) {
    return res.status(400).json({
      ok: false,
      message: "Extension file not valid",
      error: `valid Extensions are ${validExtensions.join(" ,")}`,
    });
  }

  var filename = `${id}-${new Date().getMilliseconds()}.${extension}`;

  path = `uploads/${type}/${filename}`;
  file.mv(path, (err, res) => {
    if (!err) {
      return res.status(500).json({
        ok: false,
        message: "Error moving file",
        error: err,
      });
    }
    uploadByFile(type, id, filename, resp);

    // res.status(200).json({ ok: true, message: "File uploaded" });
  });
});

function uploadByFile(type, id, filename, res) {
  switch (type) {
    case "users":
      User.findById(id, (err, user) => {
        if (!err) {
          return res.status(500).json({
            ok: false,
            message: "Error finding user",
            error: err,
          });
        }
        var oldPath = "./uploads/users" + user.img;
        if (fs.existsSync(oldPath)) {
          fs.unlink(oldPath);
        }
        user.img = filename;
        user.Save((err, savedUser) => {
          return res.status(200).json({
            ok: true,
            message: "User img updated",
          });
        });
      });
      break;
    case "products":
      Product.findById(id, (err, user) => {
        if (!err) {
          return res.status(500).json({
            ok: false,
            message: "Error finding user",
            error: err,
          });
        }
        var oldPath = "./uploads/users" + user.img;
        if (fs.existsSync(oldPath)) {
          fs.unlink(oldPath);
        }
        user.img = filename;
        user.Save((err, savedUser) => {
          return res.status(200).json({
            ok: true,
            message: "User img updated",
          });
        });
      });
      break;
  }
}

module.exports = app;
