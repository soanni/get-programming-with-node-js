const httpStatus = require('http-status-codes');

const logErrors = (error, req, res, next) => {
	console.log(`ERROR occured: ${error.stack}`);
	next(error);
};

// const respondNoResourseFound = (req, res) => {
// 	let errorCode = httpStatus.NOT_FOUND;
// 	res.status(errorCode);
// 	res.send(`${errorCode} | The page does not exist!`);
// };

const respondNoResourseFound = (req, res) => {
	let errorCode = httpStatus.NOT_FOUND;
	res.status(errorCode);
	res.sendFile(`./public/${errorCode}.html`,{ root: './'});
};

const respondInternalError = (error, req, res, next) => {
	let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
	res.status(errorCode);
	res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
};

module.exports = {
	logErrors,
	respondNoResourseFound,
	respondInternalError
};
