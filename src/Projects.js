import React from 'react';
//import {Link} from 'react-router-dom'
import Thumbnail from './Thumbnail';
import './css/cards.css';

class Projects extends React.Component {
	state = {
		cards : [
			{
				link  : '/twitte',
				class : 'card-image --fence'
			},
			{
				link  : '/twiter',
				class : 'card-image --river'
			},
			{
				link  : '/twter',
				class : 'card-image --record'
			},
			{
				link  : '/itter',
				class : 'card-image --flowers'
			}
		]
	};
	render() {
		return (
			<section className="red" id="projects">
				<h1>Projects</h1>
				<div className="cards">
                    {this.state.cards.map(card => <Thumbnail key={card.link} link={card.link} class={card.class} />)}

				</div>
			</section>
		);
	}
}

export default Projects;
