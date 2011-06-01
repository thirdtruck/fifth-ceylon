(function() {
  var App, express;
  express = require('express');
  App = function() {
    var app;
    app = express.createServer();
    app.get('/', function(req, res) {
      return res.send("Sometimes you have to roll a hard six, even on a d100.");
    });
    return app;
  };
  module.exports = {
    App: App
  };
}).call(this);
