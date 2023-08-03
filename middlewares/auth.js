const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = require('../config/app.config');

const { AuthError } = require('../errors/AuthError');

const extractBearerToken = (header) => header.replace('Bearer ', '');

module.exports = (req, res, next) => {
  // достаем авторизованный заголовок
  const { authorization: jwtToken } = req.headers;
  // убеждаемся, что он есть или начинается с Bearer
  if (!jwtToken) {
    next(new AuthError('Необходима авторизация'));
    return;
  }
  // извлечем токен
  const token = extractBearerToken(jwtToken);
  let payload;

  // варифицируем токен
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    // отправляем ошибку ,если не получилось
    next(new AuthError(err.message));
    return;
  }
  // записыываем пейлоуд в объект запроса
  req.user = payload;
  // пропускаем запрос дальше
  next();
};
