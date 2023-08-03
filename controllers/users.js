const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/user');
const { getUserDto } = require('../dto/user');

const { ConflictError } = require('../errors/ConflictError');
const { AuthError } = require('../errors/AuthError');

const { NODE_ENV, JWT_SECRET } = require('../config/app.config');

const createUsers = (req, res, next) => {
  const {
    name, email, password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, email, password: hash,
    }))
    .then((user) => res.status(201).send(getUserDto(user)))
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError('Почта используется'));
      } else {
        next(err);
      }
    });
};
const login = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res.send({ token });
    })
    .catch((err) => {
      if (err.code === 401) {
        next(new AuthError('Необходима авторизация'));
      } else {
        next(err);
      }
    });
};
const getInfoUser = (req, res, next) => {
  const { _id } = req.user;

  User.findById(_id)
    .then((users) => res.send(users))
    .catch(next);
};
const updateInfoUsers = (req, res, next) => {
  const { name, email } = req.body;
  const { _id } = req.user;

  User.findByIdAndUpdate(_id, { name, email }, { new: true, runValidators: true })
    .then((user) => res.send(getUserDto(user)))
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError('Почта используется'));
      } else {
        next(err);
      }
    });
};

module.exports = {
  createUsers,
  login,
  getInfoUser,
  updateInfoUsers,
};
