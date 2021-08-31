import React, { Component } from 'react';
import Navigation from './Navigation.js';
import Projects from './Projects.js';
import Articles from './Articles.jsx';
import Mainpage from './Mainpage.js';
import About from './About.jsx';
import Footer from './Footer.jsx';

class Home extends Component {
	state = {};
	render () {
		return (
			<div>
				<Navigation />
				<Mainpage />
				<About />
				<Projects />
				<Articles />
				<Footer />
			</div>
		);
	}
}

export default Home;
