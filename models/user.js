const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },

  ingredients: [
    {
      name: String,
      quantity: Number
      // , unit: String
    }
  ],
  favoriteRecipes: [],
  queuedRecipes: []
});

const User = mongoose.model("User", userSchema, "User");

module.exports = User;
