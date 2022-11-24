import React from 'react';
import '../css/Articles.css';
import getArticles from '../utils/Articles-list';
import { Link, withRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer'

const JavascriptArticle =(props) => {

const articleId = props.match.params.id;

const articles = getArticles()
const article = articles.filter(item => item.link === articleId)

		return (
			<>
			<Navigation />
			<section className="article">
				<div>
					<h2 className="padded centered">{article[0].headLine}</h2>
					<p className="padded">
					{article[0].content}
					</p>
				</div>
			</section>
			<Footer />
			</>
		);
	}

export default withRouter(JavascriptArticle);
