import axios from "axios";

export default {
  createUser: function(email, userData) {
    return axios.post("/api/users/" + email, userData);
  },
  getUser: function(email) {
    return axios.get("/api/users/" + email);
  },
  updateUser: function(email, userData) {
    return axios.put("/api/users/" + email, userData);
  },

  recipeSearch: function(queryString) {
    return axios.get("/api/recipes/" + encodeURI(queryString));
  },

  createRecipe: function(recipe) {
    return axios.post("/api/recipes", recipe);
  }
};
