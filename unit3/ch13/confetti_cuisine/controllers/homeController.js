var courses = [
	{
		title: 'Event Driven Cakes',
		cost: 50
	},
	{
		title: 'Asynchronous Artichoke',
		cost: 25
	},
	{
		title: 'Object Oriented Orange Juice',
		cost: 10
	}
];

const showIndex = (req, res) => {
	res.render('index');
};

const showCourses = (req, res) => {
	res.render('courses', { offeredCourses: courses });
};

const showSignUp = (req, res) => {
	res.render('contact');
};

const postedContactForm = (req, res) => {
	res.render('thanks');
};

module.exports = {
	showIndex,
	showCourses,
	showSignUp,
	postedContactForm
};
