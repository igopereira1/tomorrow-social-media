const { v4: uuidv4 } = require("uuid");
const connection = require("../config/connection");

const createPost = async (postContent) => {
  const { post } = postContent;
  const uuid = uuidv4();

  await connection.execute("INSERT INTO posts (id, post) VALUES (?, ?)", [
    uuid,
    post,
  ]);

  return { id: uuid, post };
};

const deletePost = async (postId) => {
  const [result] = await connection.execute("DELETE FROM posts WHERE id = ?", [
    postId,
  ]);
  return result.affectedRows;
};

module.exports = {
  createPost,
  deletePost,
};
