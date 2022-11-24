import React from 'react';
import './Article.css';
import getArticles from '../../utils/Articles-list';
import { Link, withRouter } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer'

const JavascriptArticle =(props) => {
console.log(props.match.params.id)
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
					<p>props are </p>
					<Link to="/Portfolio-v001">Homepage</Link>
				</div>
			</section>
			<Footer />
			</>
		);
	}

export default withRouter(JavascriptArticle);
