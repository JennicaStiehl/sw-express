const express = require('express');
const router = express.Router();
// const current = require('../../../pojos/Current');
// const pojos = require('../../../pojos');
// require API_helper.js
const api_helper = require('./API_helper')
require('dotenv').config();
const axios = require('axios');
const cors = require('cors')
router.use(cors())
// router.get('https://maps.googleapis.com/maps/api/geocode/json?address=denver, co&key=AIzaSyBE6czLmRxervXnUX6IiaKDCtiINn2EmzQ', (req, res) => {
//   .then(locationResponse => {
//     res.status(200).json(locationResponse)
//   })
//   .catch(error => {
//     res.status(500).send(error)
//   });
// });
//-------------
// const Url = 'https://maps.googleapis.com/maps/api/geocode/json';
// const Params = {
//   address: 'denver, co',
//   key: process.env.google_api_key
// };
// axios.get(Url, Params)
//     .then(response => (response)
//     .catch(error => (error)));
    //------------
;(async () => {
  const response = await axios({
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    method: 'get',
    params: {
        address: 'denver, co',
        key: process.env.google_api_key
    }
  })
  return (response)
  // console.log(response)
})()
    //---------
    // api_helper.make_API_call('https://maps.googleapis.com/maps/api/geocode/json?address=denver,co&key=process.env.google_api_key')

module.exports = router
