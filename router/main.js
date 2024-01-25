const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
  res.render("site/index");
});
router.get("/about", (req, res) => {
  res.render("site/about");
});
router.get("/blog", (req, res) => {
  Post.find({})
    .lean() //.lean mongoose belgesi" olmaktan çıkıp, basit JavaScript nesnelerine dönüşmesini sağlar.
    .then((posts) => {
      res.render("site/blog", { posts: posts });
      console.log(posts);
    });
});

router.get("/post", (req, res) => {
  res.render("site/post");
});
router.get("/contact", (req, res) => {
  res.render("site/contact");
});
router.get("/login", (req, res) => {
  res.render("site/login");
});
router.get("/register", (req, res) => {
  res.render("site/register");
});

module.exports = router;
