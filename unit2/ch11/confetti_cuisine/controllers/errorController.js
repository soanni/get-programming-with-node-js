const httpStatus = require('http-status-codes');

const pageNotFoundError = (req, res) => {
	let errorCode = httpStatus.NOT_FOUND;
	res.status(errorCode);
	res.render('error');
};

const internalServerError = (error, req, res, next) => {
	let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
	console.log(`ERROR occured: ${error.stack}`);
	res.status(errorCode);
	res.send(`${errorCode} | Sorry, our application is taking a nap!`);
};

module.exports = {
	pageNotFoundError,
	internalServerError
};
