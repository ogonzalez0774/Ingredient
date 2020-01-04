const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: { type: String, required: true },
    ingredients: [{ name: { type: String, required: true }, amount: Number }]
});

const Recipe = mongoose.model("Recipe", recipeSchema, "Recipe");

module.exports = Recipe;
