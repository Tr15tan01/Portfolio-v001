import React from 'react';
import '../css/Articles.css';
import getArticles from '../utils/Articles-list';
import { Link } from 'react-router-dom';

const Articles =() =>{

	 const articles= getArticles()

		return (
			<section className="green" id="articles">

				<div className="container">
					{articles.map((article) => (
						<div key={article.headLine}>
							<h2 >{article.headLine}</h2>
							<h3>{article.subHeadLine}</h3>
							<p>{article.content.slice(0,333)}</p>
							<Link className="linker" to={article.link}>Read More</Link>
							<hr />
						</div>
					))}
				</div>
			</section>
		);
}

export default Articles;
