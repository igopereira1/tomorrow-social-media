const validateUserData = (userData) => {
  const errors = [];

  if (!userData.name) {
    errors.push("O campo 'name' é obrigatório.");
  }

  if (!userData.password) {
    errors.push("O campo 'password' é obrigatório.");
  } else if (userData.password.length < 8) {
    errors.push("A senha deve ter pelo menos 8 caracteres.");
  }

  if (errors.length > 0) {
    throw new Error(errors.join(" "));
  }
};

module.exports = {
  validateUserData,
};
