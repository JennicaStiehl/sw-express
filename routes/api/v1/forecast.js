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
  const response = await fetch(`https://api.darksky.net/forecast/${process.env.DarkSky_API_Key}/${latitude},${longitude}`)
//https://api.darksky.net/forecast/dae9a56cb0f5af3f9967920a8d95b69f/39.7392358,-104.990251
  const data = await response.json();
  const timezone = data["timezone"]
  const curr_summary = data["currently"]["summary"]
  const curr_icon = data["currently"]["icon"]
  const curr_temp = data["currently"]["temperature"]
  const hrly_summary = data["hourly"]["summary"]
  const hrly_icon = data["hourly"]["icon"]
  const daily_summary = data["daily"]["summary"]
  const daily_icon = data["daily"]["icon"]

  // var pry = require('pryjs'); eval(pry.it);

  console.log(`${temp}`);
}

module.exports = router
