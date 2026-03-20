const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review.controller.js");

router.post("/", reviewController.createReview_C);
router.get("/", reviewController.findAll_C);

module.exports = router;
