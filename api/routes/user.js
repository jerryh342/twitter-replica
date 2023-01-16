const User = require("../models/User");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("hey it's user");
});

//search for user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200);
  } catch (err) {}
});

//follow
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const currentUser = await User.findById(req.params.id);
      const target = await User.findById(req.body.userId);
      if (!currentUser.followers.includes(req.body.userId)) {
        await target.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({
          $push: { following: req.body.userId },
        });
        res.status(200).json("Followed");
      } else {
        res.status(403).json("followed already");
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});
//unfollow
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const currentUser = await User.findById(req.params.id);
      const target = await User.findById(req.body.userId);
      if (currentUser.following.includes(req.body.userId)) {
        await target.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({
          $pull: { following: req.body.userId },
        });
        res.status(200).json("Unfollowed");
      } else {
        res.status(403).json("Unfollowed already");
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});
module.exports = router;
