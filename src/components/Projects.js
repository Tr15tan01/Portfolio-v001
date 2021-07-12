import React from 'react';
//import {Link} from 'react-router-dom'
import Thumbnail from './Thumbnail';
import '../css/cards.css';

class Projects extends React.Component {
	state = {
		cards : [
			{
				link  : 'https://vocabulary.ge',
				class : 'card-image --vocabulary'
			},
			{
				link  : 'https://cargadgetnews.com',
				class : 'card-image --cargadgets'
			},
			{
				link  : '/twter',
				class : 'card-image --record'
			},
			{
				link  : '/itter',
				class : 'card-image --fence'
			}
		]
	};
	render() {
		return (
			<section className="red" id="projects">
				<h1 className="padded centered">Projects I have undertaken</h1>
				<div className="cards">
                    {this.state.cards.map(card => <Thumbnail key={card.link} link={card.link} class={card.class} />)}

				</div>
			</section>
		);
	}
}

export default Projects;
