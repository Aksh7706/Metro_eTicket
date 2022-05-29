const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const maskSchema = new Schema(
  {
    descriptors: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mask", maskSchema);
