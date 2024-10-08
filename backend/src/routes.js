const express = require("express");
const router = express.Router();
const postController = require("./controllers/PostController");

router.post("/posts", postController.createPost);
router.delete("/posts/:id", postController.deletePost);

module.exports = router;
