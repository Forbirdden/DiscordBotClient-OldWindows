const { Router } = require('express');

const app = Router();

app.get('/', (req, res) => {
	res.send({
		marketings: {},
	});
});

module.exports = app;
