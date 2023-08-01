const PORT = process.env.PORT || 5005;
const MONGO_NAME = process.env.MONGO_NAME || '';
const MONGO_DB = process.env.MONGO_DB || '';
const NODE_ENV = process.env.NODE_ENV !== 'production';
const JWT_SECRET = process.env.JWT_SECRET || 'production';

module.exports = {
  PORT,
  MONGO_NAME,
  MONGO_DB,
  NODE_ENV,
  JWT_SECRET,
};
