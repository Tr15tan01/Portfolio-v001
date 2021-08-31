import React from 'react';
import '../js/navbar-scroll.js';

function Navigation() {

	return (

		<div className="navbar" id="navbar">

			<a href="#mainpage" className="item">
				Mainpage
			</a>
			<a href="#about" className="item">
				About
			</a>
			<a href="#projects" className="item">
				Projects
			</a>
			<a href="#articles" className="item">
				Articles
			</a>
		</div>
	);
}

export default Navigation;
