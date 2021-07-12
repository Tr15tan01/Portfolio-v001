import React from 'react';
import getItems from '../utils/aboutData';

import '../css/about.css';

class About extends React.Component {

	state = {
		items : getItems()
	};

	render() {
		return (
			<section className="animation-container" id="about">
				<h1 className="padded centered">List of Languages, technologies and Frameworks I am working with:</h1>
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
						<p className="padded centered">I am web developer and web programmer</p>
			</section>
		);
	}
}

export default About;
