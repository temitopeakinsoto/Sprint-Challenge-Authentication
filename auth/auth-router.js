const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require('./helpers');

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);  

  const user = {
    username, 
    password: hash
  }

  Users.add(user)
  .then(saved => {
    res.status(201).json(saved)
  })
  .catch(err => {
    res.status(500).json({message: "There was an error while trying to register this user: " + err.message})
  })
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
