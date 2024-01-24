const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("site/index");
});
router.get("/about", (req, res) => {
  res.render("site/about");
});
router.get("/blog", (req, res) => {
  res.render("site/blog");
});
router.get("/blog-single", (req, res) => {
  res.render("site/blog-single");
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
router.get("/posts/new", (req, res) => {
  res.render("site/addpost");
});

module.exports = router;
