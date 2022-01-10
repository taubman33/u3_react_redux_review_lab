const { Destination, Review } = require("../models");

const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    return res.status(200).json({ destinations });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getDestinationById = async (req, res) => {
  try {
    const { id } = req.params;
    const destination = await Destination.findById(id).populate("reviews");
    if (destination) {
      return res.status(200).json({ destination });
    }
    return res.status(404).send("This destination does not exist");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const addDestinationReview = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await new Review(req.body);
    await review.save();

    const destination = await Destination.findById(id);
    destination.reviews.push(review);
    await destination.save();

    return res.status(201).json({ review });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const likeDestination = async (req, res) => {
  try {
    const { id } = req.params;

    const destination = await Destination.findOneAndUpdate(
      // find by id
      { _id: id },
      // increment likes by 1
      { $inc: { likes: 1 } },
      // return the updated document
      { new: true }
    );

    return res.status(200).json({ likes: destination.likes });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  getAllDestinations,
  getDestinationById,
  addDestinationReview,
  likeDestination,
};
