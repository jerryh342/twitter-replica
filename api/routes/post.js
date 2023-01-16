const Post = require("../models/Post");
const User = require("../models/User");

const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("post page");
});

//post
router.post("/create", async (req, res) => {
  const newPost = new Post({ userId: req.body.userId, desc: req.body.desc });
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  //delete post
  router.post("/delete", async (req, res) => {
    try {
      const post = await Post.findById(req.body.postId);
      if (post) {
        await post.deleteOne();
        res.status(200).json("post deleted");
      } else {
        res.status(500).json("not permitted");
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("error");
    }
  });
});

//like
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("liked");
    } else {
      res.status(403).json("you have liked this post already");
    }
  } catch (err) {
    console.log(err);
  }
});
//get post feed
router.post("/feed", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const followingPosts = await Promise.all(
      currentUser.following.map((followingId) => {
        return Post.find({ userId: followingId });
      })
    );
    res.json(userPosts.concat(...followingPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
