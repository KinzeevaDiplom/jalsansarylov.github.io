const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clickerSchema = new Schema({
  counter: {
    type: Number,
    default: 0,
    required: true,
  },
});

module.exports = mongoose.model("clicker", clickerSchema);
