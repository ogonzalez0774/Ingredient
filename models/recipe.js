const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: { type: String },
    ingredients: [
        {
            name: { type: String },
            amount: { type: Number },
            unit: { type: String }
        }
    ]
});

const Recipe = mongoose.model("Recipe", recipeSchema, "Recipe");

module.exports = Recipe;
