import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './css/cards.css'
 
function Thumbnail(props) {
  
  return (
    // <div className="project">
    //   <Link to={props.link}>
    //     <div className="project-image">
    //       <img src={props.image} alt=""/>
    //     </div>
    //     <div className="project-title">{props.title}</div>
    //     <div className="project-category">{props.category}</div>
    //         </Link>
    // </div>


  <div className="card-tile">
    <div className="card">
      <div className={props.class}></div>
      <div className="card-content">
        <div className="card-title">{props.title}</div>
        <p className="card-text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
        <button className="card-btn"> <Link to={props.link}>Button</Link></button>
      </div>
    </div>
  </div>
  )
}
 
export default Thumbnail;