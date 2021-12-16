const articles = [
	{
		headLine: 'What is JavaScript and where do we use it',
		subHeadLine: 'History and development of JavaScript',
		content:
			'A high-level definition JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.'
	},
	{
		headLine: 'JavaScript Libraries vs. Frameworks',
		subHeadLine: 'What’s the Difference: ',
		content:
			'A question I hear quite often is “What’s the difference between JavaScript libraries and frameworks?” That’s a good question, and there has been a lot of discussion on it online. What Are JavaScript Libraries? Generally, a JS library is a reusable piece of code that oftentimes has one primary use case. A library can consist of several functions/objects/methods, depending on the language. Your application can “link” to a library to allow you access to that functionality. What Are JavaScript Frameworks? On the other hand, a JS framework has more control of your app. It helps direct you on the architecture and the project that follows. Frameworks consist of multiple libraries and they provide you with hooks and callbacks, so you can continue to build upon them.'
	},
	{
		headLine: 'History of the Web',
		subHeadLine: 'History of the Web',
		content:
			'Sir Tim Berners-Lee is a British computer scientist. He was born in London, and his parents were early computer scientists, working on one of the earliest computers. Growing up, Sir Tim was interested in trains and had a model railway in his bedroom. He recalls: I made some electronic gadgets to control the trains. Then I ended up getting more interested in electronics than trains. Later on, when I was in college I made a computer out of an old television set.'
	}
];

const getArticles = () => {
	return articles;
};

export default getArticles;
