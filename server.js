const express = require('express');
const app = express();
const path = require('path');


// My modules.
const { router } = require('./router');    // Main route
const { notFoundError, errorHandler} = require('./errors/errorHandler');    // All methods handler Error.


// Options setting.
app.use(express.static('public'));
app.use(express.json());    // Body-parser json setting.
app.use(express.urlencoded({extended : true}));    // Body-parser urlencoded setting.


// View engine config. 
app.set('view engine', 'ejs');    // Set view engine,
app.set('views', path.join(__dirname, 'views'));    // Set dir view file.
 

// All route and errorHandlers.
app.use(router);    // All route.
app.use(notFoundError);    // Not found error handler.
app.use(errorHandler);    // Handel errors.


// Create server on port 8000.
app.listen(8000, (req, res, next) => console.log('Running server on port 8000...'));