import React from 'react';
import getItems from '../utils/aboutData';

import '../css/about.css';

class About extends React.Component {

	state = {
		items: getItems()
	};

	render() {
		return (
			<section className="animation-container" id="about">
				<h1 className="padded centered">List of Languages, technologies and Libraries I am working with:</h1>
				<div className="cards-container">
					{this.state.items.map((item) => (
						<div key={item.color} className="item-card">
							<div className="container">
								<span style={{ color: item.color }}>
									<h2 className="centered">{item.language}</h2>
									{item.icon}
								</span>
							</div>
						</div>
					))}
				</div>
				<h1 className="padded centered">Some Info About Me</h1>
				<p className="padded centered middle-fonted">Tech-savvy Full Stack Web Developer proficient in fundamental front-end languages
					and server-side languages. In-depth knowledge of MySQL and MongoDB. Analytical and
					precise professional with 6 years of hands-on experience taking charge of front and
					back-end web development. Skillful creating servers and databases for functionality
					and designing and developing APIs. Hardworking collaborator with track record of superior results.
					This page is made with React.js, and uses it's latest features.</p>
			</section>
		);
	}
}

export default About;
