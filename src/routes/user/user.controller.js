const express = require("express");
const User = require("../../models/user");

const router = express.Router()

router.post("/", (req, res) => {
  const payload = req.body;
  console.log(payload);
  const user = new User(payload);

  user
    .save()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

router.get("/user", (req, res) => {
  User.find()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

router.get("/search", (req, res) => {
  User.find({ username: req.body["username"] })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

module.exports = router
