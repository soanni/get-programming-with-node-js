const express = require('express'),
	homeController = require('./controllers/homeController'),
	app = express();

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.get('/name', homeController.respondWithName);

app.listen(app.get('port'), () => {
	console.log(`Server is running at http://localhost:${app.get('port')}`);
});
