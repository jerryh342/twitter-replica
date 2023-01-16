const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const newUser = await new User({
    username: username,
    password: password,
  });

  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username, password: password });
    !user && res.status(404).json("user not found ");
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    user ? res.status(200).json(user) : res.status(404).json("not found");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
