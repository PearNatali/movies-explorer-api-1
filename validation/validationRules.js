const { Joi } = require('celebrate');

const regexLink = /^https?:\/\/(wwww\.)?[0-9a-zA-Z-._~:/?#[\]@!$&'()*+,;=]+#?/;

const moviesDataValidationCreate = {
  body: Joi.object().keys({
    country: Joi.string().required().min(2).max(60),
    director: Joi.string().required().min(2).max(60),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(regexLink),
    trailerLink: Joi.string().required().regex(regexLink),
    thumbnail: Joi.string().required().regex(regexLink),
    movield: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
};

const moviesIdValidationObject = {
  params: Joi.object().keys({
    _id: Joi.string().required().hex().length(24),
  }),
};

const userDataValidationObject = {
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
};

const userDataValidationLogin = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
};

const userDataValidationCreate = {
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
};

module.exports = {
  userDataValidationCreate,
  userDataValidationLogin,
  userDataValidationObject,
  moviesIdValidationObject,
  moviesDataValidationCreate,
};
