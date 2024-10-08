const bcrypt = require("bcrypt");
const userModel = require("../models/UserModel");
const { validateUserData } = require("../validators/UserValidator");

const registerUser = async (userData) => {
  try {
    validateUserData(userData);

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    return userModel.registerUser({ ...userData, password: hashedPassword });
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw new Error("Erro ao registrar usuário");
  }
};

module.exports = {
  registerUser,
};
