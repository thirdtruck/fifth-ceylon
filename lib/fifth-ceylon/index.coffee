express = require 'express'

App = () ->
	app = express.createServer()

	app.get '/', (req, res) ->
		res.send "Sometimes you have to roll a hard six, even on a d100."
	
	return app

module.exports =
	App: App
