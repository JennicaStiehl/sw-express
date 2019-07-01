const express = require('express');
const router = express.Router();
var Sequelize = require('sequelize');
const models = require('../../../models');
const uuid = require('uuid');

// get all users
router.get('/users', (req, res) =>
  models.User.findAll()
  .then(userResponse => {
      res.status(200).json(userResponse)
      })
  .catch(error => {
      res.status(500).send(error)
    })
);
//get single user
router.get('/users/:id', (req, res) =>
  models.User.findByPk(parseInt(req.params.id))
  .then(userResponse => {
    res.status(200).json(userResponse)
  })
  .catch(error => {
    res.status(400).json({msg: `no user`})
  })
);
// create a new user
// if (req.body.password === req.body.password_confirmation){
router.post('/users', (req, res) =>
  models.User.create({
    email: req.body.email,
    password: req.body.password,
    api_key: uuid.v4()
  })
  .then(userResponse => {
    res.status(200).json({userResponse})
  })
  .catch(error => {
    res.status(400).json({msg: 'error'})
  })
// } else {
//   res.status(406.json({msg: 'Unable to create account'}))
// }
);
module.exports = router
