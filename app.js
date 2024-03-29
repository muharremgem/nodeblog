const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const hbs = exphbs.create();
const generateDate = require("./helpers/generateDate").generateDate;

mongoose.connect("mongodb://localhost:27017/nodeblog_db");

app.use(fileUpload());

app.use(express.static("public"));

hbs.handlebars.registerHelper("generateDate", generateDate);
app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const myMiddleware = (req, res, next) => {
  console.log("Şampiyon Fenerbahçe");
  next();
};

app.use("/", myMiddleware);

const main = require("./router/main");
const posts = require("./router/posts");
const users = require("./router/users");
// const { create } = require("./models/Post");

app.use("/", main);
app.use("/posts", posts);
app.use("/users", users);

app.listen(port, hostname, () => {
  console.log(`⁠Server running at http://${hostname}:${port}/`);
});
