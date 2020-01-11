const router = require("express").Router();
const userRoutes = require("./users");
const recipeRoutes = require("./recipes");

//Matches on /api/users
router.use("/users", userRoutes);
//Matches on /api/recipes
router.use("/recipes", recipeRoutes);

module.exports = router;
