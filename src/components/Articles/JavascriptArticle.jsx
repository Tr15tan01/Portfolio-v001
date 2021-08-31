import React from 'react';
import './Article.css';
import getArticles from '../../utils/Articles-list';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer'

class JavascriptArticle extends React.Component {
	state = {
		showComponent  : false,
		showButtonText : 'Show Article',
		subtitle       : "This article is about Javascript ant it's many uses",
		articles       : getArticles()
	};

	render () {
		return (
			<>
			<Navigation />
			<section className="article">
				<div>
					<h2 className="padded centered">What is JavaScript</h2>
					<p className="padded">
						So, what is JavaScript and why do we need it? Javascript is a scripting language that is needed
						to add interactivity to web pages. First, let start from the beginning. Who invented Javascript.
					</p>
					<Link to="/Portfolio-v001">Homepage</Link>
				</div>
			</section>
			<Footer />
			</>
		);
	}
}

export default JavascriptArticle;
