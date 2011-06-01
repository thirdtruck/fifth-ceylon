(function() {
  var fifthCeylon, ops, path, port, server;
  path = require('path');
  require.paths.push(path.join(__dirname, 'lib'));
  ops = require('optimist');
  fifthCeylon = require('fifth-ceylon');
  server = new fifthCeylon.App;
  port = ops.argv.port || 3000;
  server.listen(port);
  console.log("Listening on port " + port);
}).call(this);
