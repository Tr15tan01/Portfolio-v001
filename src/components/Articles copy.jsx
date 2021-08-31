import React from 'react';
import '../css/Articles.css';
import Modal from './Modal';
import getArticles from '../utils/Articles-list';
import { Link } from 'react-router-dom';

class Articles extends React.Component {
	state = {
		showComponent  : false,
		showButtonText : 'Show Article',
		subtitle       : "This article is about Javascript ant it's many uses",
		articles       : getArticles()
	};

	defineClasses = () => {
		const classes = this.state.showComponent ? 'visible' : 'hidden';
		return classes;
	};

	showArticle = () => {
		this.state.showComponent ? this.setState({ showComponent: false }) : this.setState({ showComponent: true });
	};

	render () {
		return (
			<section className="green" id="articles">
				<div>
					<h2 className="padded centered">What is JavaScript</h2>
					<p className="padded  middle-fonted">
						So, what is JavaScript and why do we need it? Javascript is a scripting language that is needed
						to add interactivity to web pages. First, let start from the beginning. Who invented Javascript.{' '}
						{/* <a href="https://google.com"> Read more</a> */}
						<button onClick={this.showArticle}>{this.state.showButtonText}</button>
					</p>
				</div>
				<div className="">
					{this.state.articles.map((article) => (
						<div key={article.headLine}>
							<h2>{article.headLine}</h2>
							<h3>{article.subHeadLine}</h3>
							<p>{article.content}</p>
							<button onClick={this.showArticle}>Read More</button>
							<Link to="/linker">Linker goes here</Link>
							<div>
								<Modal
									defineClasses={this.defineClasses}
									showArticle={this.showArticle}
									subtitle={this.state.subtitle}
									articleContent={article.content}
								/>
							</div>
						</div>
					))}
				</div>
				{/* <div>
					<Modal
						defineClasses={this.defineClasses}
						showArticle={this.showArticle}
						subtitle={this.state.subtitle}
						articleContent = {this.}
					/>
				</div> */}
			</section>
		);
	}
}

export default Articles;
