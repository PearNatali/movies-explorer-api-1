module.exports.getUserDto = (user) => ({
  name: user.name,
  _id: user._id,
  email: user.email,
});
