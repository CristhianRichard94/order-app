var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
const { apiPort } = require("../settings.json");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require("./api/app");
var productRoutes = require("./api/product");

mongoose.connection.openUri("mongodb://localhost:27017/testdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/", routes);
app.use("/product", productRoutes);
// app.use("/login", loginRoutes);
// app.use("/upload", uploadRoutes);
app.listen(apiPort, () =>
  console.log(`Node server listening at port ${apiPort}`)
);
