const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const authRoutes = require("./routs/auth");
const analyticsRoutes = require("./routs/analytics");
const categoryRoutes = require("./routs/category");
const orderRoutes = require("./routs/order");
const positionRoutes = require("./routs/position");
const app = express();

mongoose
  .connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("mongoDB connected"))
  .catch((error) => console.log(error));

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/analytics", analyticsRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/position", positionRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
