import axios from "axios";

export default {
  createUser: function(id, userData) {
    return axios.post("/api/users/" + id, userData);
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  updateUser: function(id, userData) {
    return axios.put("/api/users/" + id, userData);
  }
};
