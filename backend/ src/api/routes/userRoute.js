const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const checkJwt = require("../../middleware/jwt");

router.post("/create", checkJwt, userController.createUser);
router
  .use(checkJwt)
  .route("/:id")
  .get(userController.fetchUser)
  .patch(userController.updateUser);

module.exports = router;
