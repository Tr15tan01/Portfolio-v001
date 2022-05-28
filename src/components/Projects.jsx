import React from 'react';
//import {Link} from 'react-router-dom'
import Thumbnail from './Thumbnail';
import '../css/cards.css';

class Projects extends React.Component {
	state = {
		cards: [
			{
				link: 'https://vocabulary.ge',
				class: 'card-image --vocabulary',
				text: 'Technologies used: HTML, CSS, Javascript, PHP, MySQL'
			},
			{
				link: 'https://cargadgetnews.com',
				class: 'card-image --cargadgets',
				text: 'Blog about car gadgets: Technologies used: Node.js, express, MongoDb, Javascript, Ejs'
			},
			{
				link: 'https://weather-city-now.herokuapp.com/',
				class: 'card-image --weather',
				text: 'Weather App: Technologies used: Node.js, express, Javascript, CSS, Ejs, Weather API'
			},
			{
				link: 'https://chatbot-v006.herokuapp.com/2',
				class: 'card-image --chatbot',
				text: 'Simple ChatBot: Technologies used: Node.js, express, web sockets'
			},
			{
				link: 'https://chat-v003.herokuapp.com/',
				class: 'card-image --chat',
				text: 'Simple Chat App: Technologies used: Node.js, express, web sockets'
			},
			{
				link: '/twter4',
				class: 'card-image --shop',
				text: 'test text here, and more text txt sthere some rubbish nla nla nla'
			},
			{
				link: '/itter5',
				class: 'card-image --quiz',
				text: 'test text here, and more text txt sthere some rubbish nla nla nla'
			},
			{
				link: '/itter6',
				class: 'card-image --chatbot',
				text: 'test text here, and more text txt sthere some rubbish nla nla nla'
			}
		]
	};
	render() {
		return (
			<section className="red" id="projects">
				<h1 className="padded centered">Projects I have undertaken</h1>
				<div className="cards">
					{this.state.cards.map(card => <Thumbnail key={card.link} link={card.link} class={card.class} text={card.text} />)}

				</div>
			</section>
		);
	}
}

export default Projects;
