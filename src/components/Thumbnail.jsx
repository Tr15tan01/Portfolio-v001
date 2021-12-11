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
          <p className="card-text">{props.text}</p>
          <a href={props.link} rel="noreferrer" target="_blank"><button className="card-btn"> Go To Project</button></a>

        </div>
      </div>
    </div >
  )
}

export default Thumbnail;