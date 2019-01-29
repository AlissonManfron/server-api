var express = require('express'),
    fs = require('fs'),
    https = require('https'),
    user = require('./routes/User'),
    app = express();
    
// Routes
app.use('/users', user);

var options = {
  key: fs.readFileSync('./sslcert/server.key'),
  cert: fs.readFileSync('./sslcert/server.cert')
};

https.createServer(options, app).listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
});