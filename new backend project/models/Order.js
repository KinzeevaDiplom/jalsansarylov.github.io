const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchama = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  order: {
    type: Number,
    required: true,
  },
  list: {
    name: {
      type: String,
    },
    quantity: {
      type: Number,
    },
  },
  user: {
    ref: "users",
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("orders", orderSchama);
