const router = require('express').Router();
const { celebrate } = require('celebrate');
const {
  getInfoUser,
  updateInfoUsers,
} = require('../controllers/users');
const {
  userDataValidationObject,
} = require('../validation/validationRules');

router.get('/me', getInfoUser);
router.patch('/me', celebrate(userDataValidationObject), updateInfoUsers);

module.exports = router;
