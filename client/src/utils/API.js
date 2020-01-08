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

  recipeSearch: function(query) {
    // return null;
    // return axios.get("api/recipes/" + query);
  }
};
