var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require ('body-parser');
const path = require('path');
const { Pool } = require('pg'); 
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true 
});

app.use (express.static(path.join(__dirname + '../front-end')));
//invoke functions on a service hosted in a different location
// Add headers
app.use (bodyParser.json());
app.use (bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
// Website you wish to allow to connect res.setHeader('Access-Control-Allow-Origin', '*')
res.setHeader('Access-Control-Allow-Origin', '*');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// Request headers you wish to allow ,
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow- Headers');
// Pass to next layer of middleware
next(); 
});

app.get('/', (req, res) => res.render('pages/index'))
  .listen(port, () => console.log('Listening on Heroku Server'))