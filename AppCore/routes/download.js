const { Router } = require('express');

const app = Router();

app.get('/', (req, res) => {
	return res.redirect(
		'https://github.com/Forbirdden/DiscordBotClient-OldWindows',
	);
});

module.exports = app;
