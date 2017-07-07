// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/myBakery');


// Get our API routes
const api = require('./src/routes/api');
const user = require('./src/routes/user');
const recipe = require('./src/routes/recipe');
const ingredient = require('./src/routes/ingredient');
const recipeIngredient = require('./src/routes/recipe-ingredient');
const category = require('./src/routes/category');
const functionality = require('./src/routes/functionality');
const unit = require('./src/routes/unit');
const userRole = require('./src/routes/user-role');


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our server to use our routes
app.use('/api', api);
app.use('/user',user);
app.use('/recipe',recipe);
app.use('/ingredient',ingredient);
app.use('/recipe-ingredient',recipeIngredient);
app.use('/category',category);
app.use('/functionality', functionality);
app.use('/unit', unit);
app.use('/user-role', userRole);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
