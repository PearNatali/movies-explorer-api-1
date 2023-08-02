const { MONGO_DB = 'mongodb://0.0.0.0:27017/bitfilmsdb' } = process.env;
const NODE_ENV = process.env.NODE_ENV !== 'production';
const { JWT_SECRET = 'JWT_SECRET' } = process.env;

module.exports = {
  MONGO_DB,
  NODE_ENV,
  JWT_SECRET,
};
