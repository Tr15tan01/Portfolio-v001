const articles = [
	{
		headLine: 'What is JavaScript and where do we use it',
		subHeadLine: 'History and development of JavaScript',
		link: 'article-1',
		content:
			`A high-level definition JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.
			The first web browser with a graphical user interface, Mosaic, was released in 1993. Accessible to non-technical people, it played a prominent role in the rapid growth of the nascent World Wide Web.[11] The lead developers of Mosaic then founded the Netscape corporation, which released a more polished browser, Netscape Navigator, in 1994. This quickly became the most-used.[12][13]
During these formative years of the Web, web pages could only be static, lacking the capability for dynamic behavior after the page was loaded in the browser. There was a desire in the flourishing web development scene to remove this limitation, so in 1995, Netscape decided to add a scripting language to Navigator. They pursued two routes to achieve this: collaborating with Sun Microsystems to embed the Java programming language, while also hiring Brendan Eich to embed the Scheme language.[6]
Netscape management soon decided that the best option was for Eich to devise a new language, with syntax similar to Java and less like Scheme or other extant scripting languages.[5][6] Although the new language and its interpreter implementation were called LiveScript when first shipped as part of a Navigator beta in September 1995, the name was changed to JavaScript for the official release in December.[6][1][14]
The choice of the JavaScript name has caused confusion, implying that it is directly related to Java. At the time, the dot-com boom had begun and Java was the hot new language, so Eich considered the JavaScript name a marketing ploy by Netscape.     
Source - Wikipedia`
	},
	{
		headLine: 'JavaScript Libraries vs. Frameworks',
		subHeadLine: "What’s the Difference: ",
		link: 'article-2',
		content:
			'A question I hear quite often is “What’s the difference between JavaScript libraries and frameworks?” That’s a good question, and there has been a lot of discussion on it online. What Are JavaScript Libraries? Generally, a JS library is a reusable piece of code that oftentimes has one primary use case. A library can consist of several functions/objects/methods, depending on the language. Your application can “link” to a library to allow you access to that functionality. What Are JavaScript Frameworks? On the other hand, a JS framework has more control of your app. It helps direct you on the architecture and the project that follows. Frameworks consist of multiple libraries and they provide you with hooks and callbacks, so you can continue to build upon them.'
	},
	{
		headLine: 'History of the Web',
		subHeadLine: 'History And Defelopment Of The Web',
		link: 'article-3',
		content:
		`The Web was invented by English computer scientist Tim Berners-Lee at CERN, and originally conceived as a document management system.[8][9][10] The first proposal was written in 1989,[7] and a working system implemented by the end of 1990 including the WorldWideWeb browser and an HTTP server.[11] The technology was released outside CERN to other research institutions starting in January 1991, and then to the general public on 23 August 1991. The Web was a success at CERN, and began to spread to other scientific and academic institutions. Within the next two years, there were 50 websites created.[12][13]

		CERN made the Web protocol and code available royalty free in 1993, enabling its widespread use.[14][15] After the NCSA released Mosaic later that year, the Web became very popular with thousands of websites springing up in less than a year.[16][17] Mosaic was a graphical browser that could display inline images and submit forms, and HTTPd, a server that could process forms (see CGI).[18][19] Marc Andreessen and Jim Clark founded Netscape the following year and released Navigator, which introduced Java and JavaScript to the Web. It quickly became the dominant browser. Netscape became a public company in 1995 which triggered a frenzy for the Web and started the dot-com bubble.[20] Microsoft responded by developing its own browser, Internet Explorer. By bundling it with Windows, it became the dominant browser for 14 years.[21]
		
		Tim Berners-Lee founded the World Wide Web Consortium (W3C) which created XML in 1996 and recommended replacing HTML with stricter XHTML.[22] In the meantime, developers began exploiting an IE feature called XMLHttpRequest to make Ajax applications and launched the Web 2.0 revolution. Mozilla, Opera, and Apple rejected XHTML and created the WHATWG which developed HTML5.[23] In 2009, the W3C conceded and abandoned XHTML[24] and in 2019, ceded control of the HTML specification to the WHATWG.[25]
		
		The World Wide Web has been central to the development of the Information Age and is the primary tool billions of people use to interact on the Internet.`	
	}
];

const getArticles = () => {
	return articles;
};

export default getArticles;
