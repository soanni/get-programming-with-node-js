const Subscriber = require('../models/subscriber');

//const getAllSubscribers = (req, res, next) => {
//	Subscriber.find({}, (error, subscribers) => {
//		if (error) next(error);
//		req.data = subscribers;
//		next();
//	});
//};

const getAllSubscribers = (req, res) => {
	Subscriber.find({})
		.exec()
		.then((subscribers) => {
			res.render('subscribers', { subscribers: subscribers});
		})
		.catch((error) => {
			console.log(error.message);
			return [];
		})
		.then(() => {
			console.log('promise completed');
		})
};

const getSubscriptionPage = (req, res) => {
	res.render('contact');
};

const saveSubscriber = (req, res) => {
	let newSubscriber = new Subscriber({
		name: req.body.name,
		email: req.body.email,
		zipCode: req.body.zipCode
	});

	newSubscriber.save()
		.then(result => {
			res.render('thanks');
		})
		.catch(error => {
			if (error) res.send(error);
		})
//	newSubscriber.save((error, result) => {
//		if (error) res.send(error);
//		res.render('thanks');
//	});
};

module.exports = {
	getAllSubscribers,
	getSubscriptionPage,
	saveSubscriber
};
