const express = require("express");
const z = require("zod");
const { findAllPosts, savePost } = require("../database/post");
const { post } = require("../database/prisma");
const auth = require("../middleware/auth");

const router = express.Router();

const PostSchema = z.object({
  text: z.string(150),
});

router.get("/posts", async (req, res) => {
  const posts = await findAllPosts(req.userId);
  res.json({
    posts,
  });
});

router.post("/registerPost", auth, async (req, res) => {
  try {
    const post = PostSchema.parse(req.body);
    const userId = req.userId;
    const savedPost = await savePost(post, userId);
    res.status(201).json({
      post: savedPost,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(422).json({
        message: error.errors,
      });
    }
    res.status(500).json({
      message: "server error",
    });
  }
});

module.exports = router;
