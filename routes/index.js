const express = require('express');
const path = require('path');
const logger = require('../middleware/logger');
const users = require('./api/v1/users');
// const router = express.Router();
const app = express();

//init middleware
// app.use(logger);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//users api routes
app.use(users, require('./api/v1/users'));
// app.use(users, require('./api/v1/users'))
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server started on ${PORT}`)});
