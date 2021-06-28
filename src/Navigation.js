import React from 'react'
import './js/navbar-scroll.js'

function Navigation() {
    return(          
<div className="navbar" id="navbar">
                                
  {/* <Link to="/" className="item">Projects</Link>
  <Link to="/#articles" className="item">Articles</Link>
  <Link to="/#about" className="item">About</Link> */}
<a href="#mainpage" className="item">Mainpage</a>
  <a href="#projects" className="item">Projects</a>
  <a href="#articles" className="item">Articles</a>
  <a href="#about" className="item">About</a>

</div>
    )
}

export default Navigation;