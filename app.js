var express = require('express'),
    fs = require('fs'),
    https = require('https'),
    user = require('./routes/User'),
    app = express();

var port = process.env.PORT || 5000;
var options = {
  key: fs.readFileSync('./sslcert/server.key'),
  cert: fs.readFileSync('./sslcert/server.cert')
};

    
// Routes
app.use('/users', user);


https.createServer(options, app).listen(port, function () {
  console.log('Example app listening on port '+ port + '! Go to https://localhost:' + port);
});