const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const hbs = exphbs.create();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/nodeblog_db");

app.use(express.static("public"));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const main = require("./router/main");
app.use("/", main);

app.listen(port, hostname, () => {
  console.log(`⁠Server running at http://${hostname}:${port}/`);
});
