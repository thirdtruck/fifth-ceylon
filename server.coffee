path = require 'path'
require.paths.push path.join(__dirname, 'lib')

ops = require 'optimist'

fifthCeylon = require 'fifth-ceylon'

server = new fifthCeylon.App

port = ops.argv.port or process.env.PORT or 3000

server.listen port
console.log "Listening on port " + port
