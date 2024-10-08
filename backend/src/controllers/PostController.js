const postModel = require("../models/PostModel");

const createPost = async (req, res) => {
  const { post } = req.body;

  try {
    const createdPost = await postModel.createPost({ post });
    return res.status(201).json(createdPost);
  } catch (error) {
    console.error("Error creating post:", error);
    return res.status(500).json({ message: "Erro ao criar post" });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    await postModel.deletePost(id);
    return res.status(204).end();
  } catch (error) {
    console.error("Error ao deletar post:", error);
    return res.status(500).json({ message: "Erro ao deletar post" });
  }
};

module.exports = {
  createPost,
  deletePost,
};
