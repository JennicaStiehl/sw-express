const express = require('express');
const path = require('path');
const logger = require('../middleware/logger');
const users = require('./api/v1/users');
const location = require('./api/v1/location');
const forecast = require('./api/v1/forecast');
// const router = express.Router();
const app = express();
require('dotenv').config();
//init middleware
// app.use(logger);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//user api routes
app.use(users, require('./api/v1/users'));

// location routes
app.use(location, require('./api/v1/location'));

// forecast api routes
// app.use(forecast, require('./api/v1/forecast'));

// port environment variables and communicatio
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server started on ${PORT}`)});
