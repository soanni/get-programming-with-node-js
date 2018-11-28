const port = 3000,
	http = require('http'),
	httpStatusCodes = require('http-status-codes'),
	router = require('./router'),
	fs = require('fs'),
	plainTextContentType = {
		'Content-Type': 'text/plain'
	},
	htmlContentType = {
		'Content-Type': 'text/html'
	},
	sendErrorResponse = (res) => {
		res.writeHead(httpStatus.NOT_FOUND, {
			'Content-Type': 'text/html'
		});
		res.write('<h1>File Not Found!</h1>');
		res.end();
	};	
	customReadFile = (file_path, res) => {
		if(fs.existsSync(file_path)) {
			fs.readFile(file_path, (error, data) => {
				if(error) {
					console.log(error);
					sendErrorResponse(res);
					return;
				}
				res.write(data);
				res.end();
			});
		} else {
			sendErrorResponse(res);
		}
	};

router.get('/', (req, res) => {
	res.writeHead(httpStatusCodes.OK, plainTextContentType);
	res.end('INDEX');
});

router.get('/index.html', (req, res) => {
	res.writeHead(httpStatusCodes.OK, htmlContentType);
	customReadFile('views/index.html', res);
});

router.post('/', (req, res) => {
	res.writeHead(httpStatusCodes.OK, plainTextContentType);
	res.end('POSTED');
});

http.createServer(router.handle).listen(port);
console.log(`The server has started and is listening on port number: ${port}`);