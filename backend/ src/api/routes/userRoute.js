const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const checkJwt = require("../../middleware/jwt");

router.post("/create", userController.createUser);
router.get("/:id", userController.fetchUser);

module.exports = router;
