pry = require('pryjs')
// var pry = require('pryjs'); eval(pry.it);
const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

require('dotenv').config();
const cors = require('cors')
router.use(cors())

router.get('/forecast', (req, res) => {
  getForecast(req, res)
  .then(weatherResponse => {
    var pry = require('pryjs'); eval(pry.it);
      res.status(200).json(weatherResponse)
      })
  .catch(error => {
      res.status(500).send(error)
    });
});
const key =  process.env.DarkSky_API_Key
const latitude = '39.7392358'
const longitude = '-104.990251'

async function getForecast(req, res) {
  const response = await fetch(`https://api.darksky.net/forecast/${key}/${latitude},${longitude}`)
  const data = await response.json();
  // const temp = data["results"][0]
  // console.log(`${temp}`);
}

module.exports = router
