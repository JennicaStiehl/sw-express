pry = require('pryjs')
// var pry = require('pryjs'); eval(pry.it);
const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const models = require('../../../models');

require('dotenv').config();
const cors = require('cors')
router.use(cors())

router.get('/location', (req, res) => {
  getLocation(req, res)
  .then(locationResponse => {
      res.status(200).json(locationResponse)
      })
  .catch(error => {
      res.status(500).send(error)
    });
});
router.post('/locations', (req, res) =>
  models.Location.create({
    city: req.body.city,
    state: req.body.state
  })
  .then(locationResponse => {
    res.status(200).json({locationResponse})
  })
  .catch(error => {
    res.status(400).json({msg: 'error'})
  })
// } else {
//   res.status(406.json({msg: 'Unable to create account'}))
// }
);
const address = 'denver, co'
const key = process.env.google_api_key
const json = true

async function getLocation(req, res) {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=denver,co&key=${process.env.google_api_key}&json=true`);
  const data = await response.json();
    const latitude = data["results"][0]["geometry"]["location"]["lat"]
    const longitude = data["results"][0]["geometry"]["location"]["lng"]
    return {latitude,
              longitude
    }
    console.log(`${lat}, ${lng}`);
}

module.exports = router
