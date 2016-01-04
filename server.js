var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , port = process.env.PORT || 3000


var mongoose   = require('mongoose');
mongoose.connect('localhost:27017/todos'); // connect to our database

// configure body parser so we can get http body data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('./controllers'))

app.listen(port, function() {
  console.log('Listening on port ' + port)
})