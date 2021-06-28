import React from 'react';
//import {Link} from 'react-router-dom'
import Thumbnail from './Thumbnail';

function Peojects(props) {
	return (
    <section className="red" id="projects">
		<h1>Projects</h1>
		<div className="projects-container">
			
			
			<Thumbnail
				link="/twitter"
				image="https://cdn3.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png"
				title="Twitter Newsfeed"
				category="Mobile App"
			/>

			<Thumbnail
				link="/airbnb"
				image="data:image/jpeg;base64,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"
				title="Airbnb Experiences"
				category="Website"
			/>

			<Thumbnail
				link="/photoshop"
				image="http://photoshop-image-url.jpg"
				title="Photoshop Redesign"
				category="Desktop App"
			/>
		</div>
    </section>
	);
}

export default Peojects;
