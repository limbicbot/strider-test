var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.status(200).send('ok');
});

var server = app.listen(3001, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});

module.exports = server;
