const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/index.js");

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "build")));
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cookbookDB");

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});
