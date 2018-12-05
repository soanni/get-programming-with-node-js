const port = 3000,
	express = require('express'),
	bodyParser = require('body-parser'),
	homeController = require('./controllers/homeController'),
	app = express();

app.use(homeController.logRequestPaths);

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());

app.post('/', homeController.postHome);

app.get('/', homeController.getHome);

app.get('/items/:vegetable', homeController.sendReqParam);

app.listen(port, () => {
	console.log(`The Express.js server has started and is listening on port number: ${port}`);
});