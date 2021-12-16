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
				text: 'test text here, and more text txt sthere some rubbish nla nla nla'
			},
			{
				link: '/twter1',
				class: 'card-image --weather',
				text: 'test text here, and more text txt sthere some rubbish nla nla nla'
			},
			{
				link: '/itter2',
				class: 'card-image --chatbot',
				text: 'test text here, and more text txt sthere some rubbish nla nla nla'
			},
			{
				link: '/itter3',
				class: 'card-image --chat',
				text: 'test text here, and more text txt sthere some rubbish nla nla nla'
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
