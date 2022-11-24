import React from 'react';
import '../css/Articles.css';
import Modal from './Modal';
import getArticles from '../utils/Articles-list';
import { Link } from 'react-router-dom';

class Articles extends React.Component {
	state = {
		showComponent: false,
		showButtonText: 'Show Article',
		subtitle: "This article is about Javascript ant it's many uses",
		articles: getArticles()
	};

	defineClasses = () => {
		const classes = this.state.showComponent ? 'visible' : 'hidden';
		return classes;
	};

	showArticle = () => {
		this.state.showComponent ? this.setState({ showComponent: false }) : this.setState({ showComponent: true });
	};

	render() {
		return (
			<section className="green" id="articles">

				<div className="container">
					{this.state.articles.map((article) => (
						<div key={article.headLine}>
							<h2 >{article.headLine}</h2>
							<h3>{article.subHeadLine}</h3>
							<p>{article.content}</p>
							{/* <button onClick={this.showArticle}>Read More</button> */}
							<Link className="linker" to="/javascriptarticle/rt">Read More</Link>
						
						</div>
					))}
				</div>

			</section>
		);
	}
}

export default Articles;
