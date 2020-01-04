const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/:email")
  .get(userController.findByEmail)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
