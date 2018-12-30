const express = require('express'),
	homeController = require('./controllers/homeController'),
	errorController = require('./controllers/errorController'),
	layouts = require('express-ejs-layouts'),
	app = express();

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.use(layouts);
app.use(express.static('public'));

app.get('/name/:myName', homeController.respondWithName);

app.use(errorController.respondNoResourseFound);
app.use(errorController.logErrors);
app.use(errorController.respondInternalError);

app.listen(app.get('port'), () => {
	console.log(`Server is running at http://localhost:${app.get('port')}`);
});
