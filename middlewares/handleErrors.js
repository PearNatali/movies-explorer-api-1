const mongoose = require('mongoose');

module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  if (err instanceof mongoose.Error.ValidationError) {
    res.status(400).send('Некорретный запрос');
  } else if (statusCode === 500) {
    res.status(statusCode).send('Внутренняя ошибка сервера');
  } else {
    res.status(statusCode).send({ message });
  }
  next();
};
