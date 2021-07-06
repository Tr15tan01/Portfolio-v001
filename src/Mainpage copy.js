import React from "react";
import './css/banner.css'
 
function Mainpage(props) {
  return (
    <section className="white" id="mainpage">
    <div className="banner">
    <div className="circle"></div>
<div className="dashed-circle"><div className="dashed-circle-sm"><div className="dashed-circle-xs"></div></div></div>
<div className="circle-l"></div>
<div className="line1"></div>
<div className="line2"></div>
<div className="line3"></div>
<div className="line4"></div>
<div className="rectangle"></div>
<div className="rectangle1"></div>
<div className="shower">
  <h1>[Welcome To My Page]</h1>
  <h2>I am Tristan Varamashvili</h2>
  <h2>Javascript Programmer And Web Developer</h2>
  
</div>
    </div>
    </section>
  )
}
 
export default Mainpage;