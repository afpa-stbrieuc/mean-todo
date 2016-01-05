var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var config = require('./config');


var mongoose   = require('mongoose');
mongoose.connect(config.db.mongodb); // connect to our database

// configure body parser so we can get http body data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('./controllers'))

app.listen(port, function() {
  console.log('Listening on port ' + port)
})