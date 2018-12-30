const express = require('express'),
	//bodyParser = require('body-parser'),
	app = express(),
	layouts = require('express-ejs-layouts'),
	homeController = require('./controllers/homeController'),
	errorController = require('./controllers/errorController');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(layouts);

app.get('/', homeController.showIndex);
app.get('/courses', homeController.showCourses);
app.get('/contact', homeController.showSignUp);
app.post('/contact', homeController.postedContactForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get('port'), () => {
	console.log(`Server running at http://localhost:${app.get('port')}`);
});
