const express = require('express'),
	homeController = require('./controllers/homeController'),
	layouts = require('express-ejs-layouts'),
	app = express();

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.use(layouts);

app.get('/name/:myName', homeController.respondWithName);

app.listen(app.get('port'), () => {
	console.log(`Server is running at http://localhost:${app.get('port')}`);
});
