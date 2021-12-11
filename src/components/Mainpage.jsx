import React from "react";
import '../css/banner.css'

function Mainpage(props) {
  return (
    <section className="white" id="mainpage">
      <div className="banner">
        <video autoPlay muted loop id="myVideo">
          <source src={`${process.env.PUBLIC_URL}/videos/vid.mp4`} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="content">
          <h1>Hello and Welcome to my page</h1>
          <h2>I am Tristan Varamashvili </h2>
          <h3>I am JavaScript Programmer and Web Developer.</h3>
        </div>

      </div>
    </section>
  )
}

export default Mainpage;