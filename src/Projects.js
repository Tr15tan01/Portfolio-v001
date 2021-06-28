import React from 'react';
//import {Link} from 'react-router-dom'
import Thumbnail from './Thumbnail';
import './css/cards.css'

// function Peojects(props) {
// 	return (
//     <section className="red" id="projects">
// 		<h1>Projects</h1>
// 		<div className="cards">
			
			
// 			<Thumbnail
// 				link="/twitter"
// 				class="card-image --fence"	
				
// 			/>

// 			<Thumbnail
// 				link="/airbnb"
// 				class="card-image --river"
// 			/>

// 			<Thumbnail
// 				link="/photoshop"
// 				class="card-image --record"
				
// 			/>
// 			<Thumbnail
// 				link="/photoshop"
// 				class="card-image --flowers"
// 			/>
// 		</div>
//     </section>
// 	);
// }

// export default Peojects;

class Projects extends React.Component {
	state = { 
		link: '/twitter'
	 }
	render() { 
		return ( 
			<section className="red" id="projects">
					<h1>Projects</h1>
					<div className="cards">
						
						
						<Thumbnail
							link="/twitter"
							class="card-image --fence"	
							
						/>
			
						<Thumbnail
							link="/airbnb"
							class="card-image --river"
						/>
			
						<Thumbnail
							link="/photoshop"
							class="card-image --record"
							
						/>
						<Thumbnail
							link="/photoshop"
							class="card-image --flowers"
						/>
					</div>
			    </section>
		 );
	}
}
 
export default Projects;