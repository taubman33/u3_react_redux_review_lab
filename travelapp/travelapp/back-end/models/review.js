const { Schema } = require("mongoose");

const ReviewSchema = new Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = ReviewSchema;
