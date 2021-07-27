const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.qgdgi.mongodb.net/test", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("mongoDB connected"))
  .catch((e) => console.log(e));

module.exports = app;
