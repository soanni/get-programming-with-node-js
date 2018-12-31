const express = require('express'),
	//bodyParser = require('body-parser'),
	app = express(),
	layouts = require('express-ejs-layouts'),
	homeController = require('./controllers/homeController'),
	errorController = require('./controllers/errorController')
	mongoose = require('mongoose'),
	Subscriber = require('./models/subscriber'),
	dbURL = process.env.MONGODB_URI;

mongoose.connect(dbURL, {useNewUrlParser: true});
const db = mongoose.connection;

var myQuery = Subscriber.findOne({name: 'Andrey Solodov'}).where('email', /solodov/);
myQuery.exec((error, data) => {if (data) console.log(data.name);});

//var subscriber1 = new Subscriber({
//	name: 'Andrey Solodov',
//	email: 'russia_solodov@gmail.com'
//});
//
//subscriber1.save((error, savedDocument, next) => {
//	if (error) next(error);
//	console.log(savedDocument);
//});

//Subscriber.create({
//	name: 'Alex Kovan',
//	email: 'alex.kovan@gmail.com'
//}, (error, savedDocument, next) => {
//	if (error) next(error);
//	console.log(savedDocument);
//});

const gracefulShutdown = (msg, callback) => {
	db.close(() => {
		console.log(`Mongoose disconnected through ${msg}`);
		callback();
	});
};

db.on('connected', () => {
	console.log(`Mongoose connected to ${dbURL}`);
});

db.on('error', err => {
	console.log('Mongoose connection error:', err);
});

db.on('disconnected', () => {
	console.log('Mongoose disconnected');
});

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

process.once('SIGUSR2', () => {
	gracefulShutdown('nodemon restart', () => {
		process.kill(process.pid, 'SIGUSR2');
	});
});

process.on('SIGINT', () => {
	gracefulShutdown('app termination', () => {
                process.exit(0);
        });
});

process.on('SIGTERM', () => {
        gracefulShutdown('Heroku app shutdown', () => {
                process.exit(0);
        });
});
