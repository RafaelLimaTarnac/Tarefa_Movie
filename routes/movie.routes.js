const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controller.js");
const reviewController = require("../controllers/review.controller.js");

router.get("/:id", movieController.findById_C);
router.get("/", movieController.findAll_C);
router.post("/", movieController.createMovie_C);
router.put("/:id", movieController.updateMovie_C);
router.delete("/:id", movieController.deleteMovie_C);

router.get("/:id/reviews", reviewController.findByMovieId_C);

module.exports = router;
