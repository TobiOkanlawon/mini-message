var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages, title: "Mini Message Board" });
});

router.get("/new", function (req, res, next) {
  // Some function for processing the request goes here.
  res.render("form");
});

router.post("/new", function (req, res, next) {
  const { author, text } = req.body;
  messages.push({ text, user: author, added: new Date() });

  res.redirect("/");
});

module.exports = router;
