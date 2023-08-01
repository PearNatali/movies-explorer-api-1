class ManyRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ManyRequestError';
    this.statusCode = 429;
  }
}
module.exports = {
  ManyRequestError,
};
