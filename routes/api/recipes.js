const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

router.route("/:queryString").get(recipeController.search);
router.route("/:id").get(recipeController.findById);

module.exports = router;
