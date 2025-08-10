const mongoose = require("mongoose");

const widthSchema = new mongoose.Schema({
  width: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Width", widthSchema);
