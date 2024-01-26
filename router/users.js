const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/register", (req, res) => {
  res.render("site/register");
});

router.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("/internal server error");
    });
});

module.exports = router;
