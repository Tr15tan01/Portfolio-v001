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
							<p>{article.content}</p>
							{/* <button onClick={this.showArticle}>Read More</button> */}
							<Link className="linker" to={"/javascriptarticle:" + article.link}>Read More</Link>
						</div>
					))}
				</div>
			</section>
		);
}

export default Articles;
