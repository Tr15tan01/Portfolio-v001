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
				text: 'test text here, and more text txt sthere some rubbish nla nla nla, test text here, and more text txt sthere some rubbish nla nla nla '
			},
			{
				link: 'https://cargadgetnews.com',
				class: 'card-image --cargadgets',
				text: 'test text here, and more text txt sthere some rubbish nla nla nla'
			},
			{
				link: '/twter',
				class: 'card-image --weather',
				text: 'test text here, and more text txt sthere some rubbish nla nla nla'
			},
			{
				link: '/itter',
				class: 'card-image --chatbot',
				text: 'test text here, and more text txt sthere some rubbish nla nla nla'
			},
			{
				link: '/itter',
				class: 'card-image --chatbot',
				text: 'test text here, and more text txt sthere some rubbish nla nla nla'
			},
			{
				link: '/twter',
				class: 'card-image --weather',
				text: 'test text here, and more text txt sthere some rubbish nla nla nla'
			},
			{
				link: '/itter',
				class: 'card-image --chatbot',
				text: 'test text here, and more text txt sthere some rubbish nla nla nla'
			},
			{
				link: '/itter',
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
