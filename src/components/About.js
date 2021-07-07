import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 
function About(props) {
  return (
    <section className="animation-container" id="about">
   
    <div id="demo"></div>
  <div id="myDIV" width="300px">asdasd</div>
      <h1>Programming languages, frameworks and technologies I am working with:</h1>
      <i className="fab fa-html5"></i>
      <p>HTML, CSS, Javascript</p>
      <div>
    <FontAwesomeIcon icon="check-square" />
    Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
    <FontAwesomeIcon icon={['fab', 'apple']} />
    <FontAwesomeIcon icon={['fab', 'microsoft']} />
    <FontAwesomeIcon icon={['fab', 'google']} />
  </div>
     
    </section>
  )
}
 
export default About;