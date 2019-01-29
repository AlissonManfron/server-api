var express = require('express'),
    fs = require('fs'),
    https = require('https'),
    app = express();

app.get('/', function (req, res) {
  res.send('hello world!');
});

var options = {
  key: fs.readFileSync('./sslcert/server.key'),
  cert: fs.readFileSync('./sslcert/server.cert')
};

https.createServer(options, app).listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
});