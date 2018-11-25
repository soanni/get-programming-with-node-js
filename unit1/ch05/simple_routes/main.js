const routeResponseMap = {
	'/info': '<h1>Info Page</h1>',
	'/contact': '<h1>Contact Us</h1>',
	'/about': '<h1>Learn More About Us.</h1>',
	'/hello': '<h1>Say hello by emailing us here</h1>',
	'/error': '<h1>Sorry the page you are looking for is not here.</h1>'
};

const port = 3000;
http = require('http');
httpStatus = require('http-status-codes');
app = http.createServer((request, response) => {
	console.log('Received an incoming request!');
	if (request.url == '/error') {
		response.writeHead(httpStatus.NOT_FOUND, {
			'Content-Type': 'text/html'
		});
	} else {
		response.writeHead(httpStatus.OK, {
			'Content-Type': 'text/html'
		});
	}

	if (routeResponseMap[request.url]) {
		setTimeout(() => response.end(routeResponseMap[request.url]), 2000);
	} else {
		setTimeout(() => {
			response.end('<h1>Welcome!</h1>')
		}, 2000);
	}

});
app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);