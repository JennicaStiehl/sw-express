const express = require('express');
const router = express.Router();
var Sequelize = require('sequelize');
const models = require('../../../models');
const uuid = require('uuid');
// get all users
router.get('/users', (req, res) => {
  models.User.findAll()
  .then(userResponse => {
      res.status(200).json(userResponse)
      })
  .catch(error => {
      res.status(500).send(error)
    });
});
//get single user
router.get('/users/:id', (req, res) => {
  models.User.findByPk(parseInt(req.params.id))
  .then(userResponse => {
    res.status(200).json(userResponse)
  })
  .catch(error => {
    res.status(400).json({msg: `no user`})
  })
});
// create a new user
router.post('/users', (req, res) => {
  // if (req.body.password === req.body.password_confirmation){
  models.User.findOrCreate({where: {email: req.body.email, password: req.body.password}})
  .then(userResponse => {
    res.status(200).json({api_key: uuid.v4()})
  })
  .catch(error => {
    res.status(400).json({msg: 'Already exists'})
  })
// } else {
//   res.status(406.json({msg: 'Unable to create account'}))
// }
});

module.exports = router
