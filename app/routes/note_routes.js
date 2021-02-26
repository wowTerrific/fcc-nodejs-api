module.exports = function(app, db) {
	app.post('/notes', (req, res) => {
		// Create Note here
		res.send('Hello')
	})
};
