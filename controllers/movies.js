const Movie = require('../models/movies');
const { getMovieDto } = require('../dto/movie');

const { NotFoundError } = require('../errors/NotFoundError');

const getMovies = (req, res, next) => {
  Movie.find({})
    .populate(['owner'])
    .then((movies) => res.send(movies.reverse()))
    .catch((next));
};
const createMovies = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movield,
    nameRU,
    nameEN,
  } = req.body;
  const { _id: userId } = req.user;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner: userId,
    movield,
    nameRU,
    nameEN,
  })
    .then((movie) => movie.populate(['owner']))
    .then((movie) => res.status(201).send(getMovieDto(movie)))
    .catch((next));
};
const deleteMovies = (req, res, next) => {
  const { _id: movieId } = req.params;

  Movie.findById(movieId)
    .orFail(new NotFoundError('Фильм не найден'))
    .populate(['owner'])
    .then((movie) => movie.deleteOne())
    .then((movie) => res.send(getMovieDto(movie)))
    .catch((next));
};
module.exports = {
  getMovies,
  createMovies,
  deleteMovies,
};
