const connection = require('../config/connection');

const registerUser = async (userData) => {
  const [result] = await connection.execute(
    'INSERT INTO users (name, password) VALUES (?, ?)',
    [userData.name, userData.password],
  );
  return { id: result.insertId, name: userData.name };
};

module.exports = {
  registerUser,
};
