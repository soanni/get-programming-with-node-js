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

module.exports = {
	showIndex,
	showCourses
};
