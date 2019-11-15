module.exports = {
  validateNewUser
};

function validateNewUser(req, res, next) {
  const newUser = req.body;
  if (!newUser) {
    res
      .status(400)
      .json({ message: `All new users must have required fields` });
  } else if (!newUser.username) {
    res.status(400).json({ message: `All new users must have a username field` });
  } else if (!newUser.password) {
    res.status(400).json({ message: "All new users must have a password field" });
  } else {
    req.user = newUser;
    next();
  }
}
