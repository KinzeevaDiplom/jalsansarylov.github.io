const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const clickerRoute = require("./routes/clicker");
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/clicker", clickerRoute);

mongoose
  .connect(`mongodb+srv://admin:admin@cluster0.qgdgi.mongodb.net/test`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("mongoDB connected"))
  .catch((error) => console.log(error));

module.exports = app;
