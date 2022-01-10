const mongoose = require("mongoose");

const DestinationSchema = require("./destination");
const ReviewSchema = require("./review");

const Destination = mongoose.model("Destination", DestinationSchema);
const Review = mongoose.model("Review", ReviewSchema);

module.exports = {
  Destination,
  Review,
};
