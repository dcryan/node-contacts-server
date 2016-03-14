var express = require('express');
var router = express.Router();
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
connection.connect();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// define the home page route
router.get('/', function(req, res) {
  connection.query('SELECT * from birds;', function(err, rows, fields) {
    if (err) throw err;
    console.log('Birds:\n', rows);
    res.send(rows);
  });
});


// define the about route
router.get('/about', function(req, res, next) {
  res.send('About birds');
});

module.exports = router;
