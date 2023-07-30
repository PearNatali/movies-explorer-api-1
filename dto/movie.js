const { getUserDto } = require('./user');

module.exports.getMovieDto = (movie) => ({
  country: movie.country,
  director: movie.director,
  duration: movie.duration,
  year: movie.year,
  description: movie.description,
  image: movie.image,
  trailerLink: movie.trailerLink,
  thumbnail: movie.thumbnail,
  owner: getUserDto(movie.owner),
  movield: movie.movieId,
  nameRU: movie.nameRU,
  nameEN: movie.nameEN,
});
