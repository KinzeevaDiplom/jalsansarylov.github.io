const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const positionSchama = new Schema({
  name: {
    type: String,
    required: true,
  },
  const: {
    type: Number,
    default: "",
  },
  category: {
    ref: "categories",
    type: Schema.Types.ObjectId,
  },
  user: {
    ref: "users",
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("positions", positionSchama);
