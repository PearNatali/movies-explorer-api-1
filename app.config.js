const PORT = process.env.PORT || 3001;
const MONGO_DB = 'mongodb://0.0.0.0:27017/bitfilmsdb';
const NODE_ENV = process.env.NODE_ENV !== 'production'
const JWT_SECRET = process.env.JWT_SECRET || '';

module.exports = {
  PORT,
  MONGO_DB,
  NODE_ENV,
  JWT_SECRET,
};
