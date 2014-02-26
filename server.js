'use strict';

var _static = require('node-static'),
  file = new _static.Server('./app', {cache: 0});

require('http').createServer(function(request, response) {
  request.addListener('end', function () {
    file.serve(request, response);
  }).resume();
}).listen(process.env.PORT || 3000);
