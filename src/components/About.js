import React from 'react';
import { FaGithub, FaHtml5 } from 'react-icons/fa';
import html5 from '../media/html5.svg';
import css3 from '../media/css3.svg';
import javascript from '../media/javascript.svg';

import '../css/about.css'

function About(props) {
	return (
		<section className="animation-container" id="about">
			<div id="demo" />
			<div id="myDIV" width="300px">
				asdasd
			</div>
			<h1>Programming languages, frameworks and technologies I am working with:</h1>
			<i className="fab fa-html5" />
			<p>HTML, CSS, Javascript</p>
			<FaGithub size="170" />
			<FaHtml5 size="170" />
			<img className="logoImage" src={html5} alt="html5" />
      <img className="logoImage" src={css3} alt="html5" />
      <img className="logoImage" src={javascript} alt="hl5" />
			<div />
		</section>
	);
}

export default About;
