const { Router } = require("express");
const {
  getAllDestinations,
  getDestinationById,
  addDestinationReview,
  likeDestination,
} = require("../controllers");

const router = Router();

router.get("/", (req, res) => res.send("hehe xd"));

// destination routes
router.get("/destinations", getAllDestinations);

router.get("/destinations/:id", getDestinationById);

router.post("/destinations/:id/addReview", addDestinationReview);
router.post("/destinations/:id/like", likeDestination);

module.exports = router;
