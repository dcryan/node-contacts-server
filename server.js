var express = require('express');
var app = express();
var birds = require('./birds');


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.use('/app', express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// use the imported birds endpoint
app.use('/birds', birds);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
