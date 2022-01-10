const { Schema } = require("mongoose");

const DestinationSchema = new Schema(
  {
    location: { type: String, required: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },
    likes: { type: Number, default: 0 },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

module.exports = DestinationSchema;
