import React from 'react';
// import {Link} from 'react-router-dom';
import './App.css';
import '../css/cards.css'
 
function Thumbnail(props) {
  
  return (


  <div className="card-tile">
    <div className="card">
      <div className={props.class}></div>
      <div className="card-content">
        <div className="card-title">{props.title}</div>
        <p className="card-text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
        <button className="card-btn"> <a href={props.link} rel="noreferrer" target="_blank">Button</a></button>
        
      </div>
    </div>
  </div>
  )
}
 
export default Thumbnail;