const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

// this might need something like /byId or /byquery to distinguish them from each other
router.route("/:queryString").get(recipeController.search);
router.route("/:id").get(recipeController.findById);
router.route("/").post(recipeController.create);

module.exports = router;
