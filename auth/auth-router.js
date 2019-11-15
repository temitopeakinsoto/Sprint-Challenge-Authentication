const router = require('express').Router();
const Users = require('./helpers');

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const user = {username, password}
  Users.add(user)
  .then(saved => {
    res.status(201).json({message: "it worked!"})
  })
  .catch(err => {
    res.status(500).json({message: "It did not work!" + err.message})
  })
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
