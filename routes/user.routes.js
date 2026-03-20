const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");

router.get("/:id", userController.findById_C);
router.get("/", userController.findAll_C);
router.post("/", userController.createUser_C);

module.exports = router;
