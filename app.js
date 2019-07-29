var express = require('express');
var app = express();
var db = require('./database.js'); 

var ItemController = require('./controllers/ItemController')
app.use('/items', ItemController);

module.exports = app;

//comment babyyy
//asdasd