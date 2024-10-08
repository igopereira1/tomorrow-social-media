const express = require("express");
const router = express.Router();
const userController = require("./controllers/UserController");
const postController = require("./controllers/PostController");

router.post("/register", userController.registerUser);

router.post("/posts", postController.createPost);
router.delete("/posts/:id", postController.deletePost);

module.exports = router;
