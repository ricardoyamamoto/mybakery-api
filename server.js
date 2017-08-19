// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var multer = require('multer');

var mongoose = require('mongoose');

var cors = require('cors');

mongoose.connect('mongodb://localhost/myBakery');


// Get our API routes
const api = require('./src/routes/api');
const user = require('./src/routes/user');
const recipe = require('./src/routes/recipe');
const ingredient = require('./src/routes/ingredient');
const category = require('./src/routes/category');
const functionality = require('./src/routes/functionality');
const unit = require('./src/routes/unit');
const userRole = require('./src/routes/user-role');
const searchByTitle = require('./src/routes/search-by-title');
const searchByCategory = require('./src/routes/search-by-category');
const ingredientSearch = require('./src/routes/ingredient-search');
const configuration = require('./src/routes/configuration');
const conversionTable = require('./src/routes/conversion-table');

const checkIngredientUse = require('./src/routes/check-ingredient-use.js');

const initialLoad = require('./src/util/initial-load.router');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var originsWhitelist = [
    'http://localhost:4200',      //this is my front-end url for development
    'http://www.myproductionurl.com'
];
var corsOptions = {
    origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials:true
}
//here is the magic
app.use(cors(corsOptions));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our server to use our routes
app.use('/api', api);
app.use('/user',user);
app.use('/recipe',recipe);
app.use('/ingredient',ingredient);
app.use('/category',category);
app.use('/functionality', functionality);
app.use('/unit', unit);
app.use('/user-role', userRole);
app.use('/search-by-title', searchByTitle);
app.use('/search-by-category', searchByCategory);
app.use('/ingredient-search', ingredientSearch);
app.use('/check-ingredient-use', checkIngredientUse);

app.use('/initial-load', initialLoad);
app.use('/configuration', configuration);
app.use('/conversion-table',conversionTable);

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