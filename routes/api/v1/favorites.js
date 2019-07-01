const express = require('express');
const router = express.Router();
var Sequelize = require('sequelize');
const models = require('../../../models');
const uuid = require('uuid');

// get all favorites
router.get('/favorites', (req, res) =>
  models.Favorites.findAll()
  .then(favoriteResponse => {
      res.status(200).json(favoriteResponse)
      })
  .catch(error => {
      res.status(500).send(error)
    })
);
//get single favorite
router.get('/favorites/:id', (req, res) =>
  models.Favorites.findByPk(parseInt(req.params.id))
  .then(favoriteResponse => {
    res.status(200).json(favoriteResponse)
  })
  .catch(error => {
    res.status(400).json({msg: `no favorite`})
  })
);
// create a new favorite
// if (req.body.password === req.body.password_confirmation){
router.post('/favorites', (req, res) =>
  models.Favorites.create({
    user_id: req.body.user_id,
    location_id: req.body.location_id
  })
  .then(favoriteResponse => {
    res.status(200).json({favoriteResponse})
  })
  .catch(error => {
    res.status(400).json({msg: 'error'})
  })
// } else {
//   res.status(406.json({msg: 'Unable to create account'}))
// }
);
module.exports = router
