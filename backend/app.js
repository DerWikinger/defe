require('babel-register')({
    presets: [ 'es2015' ]
});

var server = require('./server.js');

var srv = new server.HTTPServer();
srv.start();