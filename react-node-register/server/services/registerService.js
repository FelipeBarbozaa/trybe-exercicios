const RegisterModel = require('../models/registerModel');

const isValid = async (login, password, rePassword) => {
  if (!login) return { message: 'Login deve ter no mínimo 5 caracteres'};
  if (login.length < 5) return { message: 'Login deve ter no mínimo 5 caracteres'}
  if (!password) return { message: 'Senha deve ter no mínimo 8 digitos'};
  if (password.length < 8) return { message: 'Senha deve ter no mínimo 8 digitos'};
  if (rePassword !== password) return { message: 'A senha não está igual'};

  const checkLoginExists = await RegisterModel.findLogin(login);
  if (checkLoginExists.length > 0) return { message: 'Usuario já existe' };
  return true;
}

const validateRegister = async (login, password, rePassword) => {
  const validate = await isValid(login, password, rePassword);

  if (validate.message) {
    return validate;
  }

  await RegisterModel.create(login, password)
  return {};
}

module.exports = {
  validateRegister,
}