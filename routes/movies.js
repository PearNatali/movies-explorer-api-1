const router = require('express').Router();
const { celebrate } = require('celebrate');
const {
  getMovies,
  createMovies,
  deleteMovies,
} = require('../controllers/movies');
const {
  moviesDataValidationCreate,
  moviesIdValidationObject,
} = require('../validation/validationRules');

router.get('/', getMovies);
router.post('/', celebrate(moviesDataValidationCreate), createMovies);
router.delete('/:_id', celebrate(moviesIdValidationObject), deleteMovies);

module.exports = router;
