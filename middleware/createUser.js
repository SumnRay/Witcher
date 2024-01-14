const User = require("./../models/user").User;

module.exports = async function(req, res, next) {
  try {
    res.locals.user = null;
    const user = await User.findById(req.session.user);
    res.locals.user = user;
    next();
  } catch (err) {
    next(err);
  }
};