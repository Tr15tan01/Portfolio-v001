import React from "react"
import '../css/footer.css'
import { FaGithub, FaFacebook, FaLinkedin, FaMailBulk } from 'react-icons/fa';

function Footer(props) {
  const currYear = new Date().getFullYear();

  return (
    <section className="footer" id="footer">
      <h2>Contact Me</h2>
      <br />
      <hr />

      <div className="footer-item">
        <ul>
          <li><a href="https://github.com/Tr15tan01"><FaGithub size="36" /> </a></li>
          <li><a href="https://www.facebook.com/tristan.varamashvili"><FaFacebook size="36" /></a></li>
          <li><a href="https://www.linkedin.com/in/tristan-varamashvili-56005344/"><FaLinkedin size="36" /></a></li>
          <li><a href="mailto:t.varamashvili@gmail.com"><FaMailBulk size="36" /></a></li>
        </ul>
      </div>
      <div className="copy"> Copyright &copy; 2020 - {currYear}</div>
    </section>
  )
}

export default Footer;