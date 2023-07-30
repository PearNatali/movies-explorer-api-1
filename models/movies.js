const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Field "country" should not be empty'],
    minlength: [2, 'Min length of "country field - 2'],
    maxlength: [60, 'Max length of "country" field - 60'],
  },
  director: {
    type: String,
    required: [true, 'Field "director" should not be empty'],
    minlength: [2, 'Min length of "director" field - 2'],
    maxlength: [60, 'Max length of "director" field - 60'],
  },
  duration: {
    type: Number,
    required: [true, 'Field "duration" should not be empty'],
  },
  year: {
    type: String,
    required: [true, 'Field "year" should not be empty'],
  },
  description: {
    type: String,
    required: [true, 'Field "description" should not be empty'],
  },
  image: {
    type: String,
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Некорректный URL',
    },
  },
  trailerLink: {
    type: String,
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Некорректный URL',
    },
  },
  thumbnail: {
    type: String,
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Некорректный URL',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Field "owner" should not be empty'],
    ref: 'user',
  },
  movield: {
    type: Number,
    required: [true, 'Field "movield" should not be empty'],
    default: [],
  },
  nameRU: {
    type: String,
    required: [true, 'Field "nameRU" should not be empty'],
  },
  nameEN: {
    type: String,
    required: [true, 'Field "nameEN" should not be empty'],
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);
