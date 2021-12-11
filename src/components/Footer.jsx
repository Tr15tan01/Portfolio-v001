import React from "react"
import '../css/footer.css'
import { Link } from 'react-router-dom'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer(props) {
  return (
    <section className="footer" id="footer">
      <div className="footer-grid">
        <div className="footer-item">
          <ul>
            <li><Link to="#">Contact</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-item">
          <ul>
            <li><Link to="#">Contact</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-item">
          <ul>
            <li><Link to="#"><FaGithub size="36" /> </Link></li>
            <li><Link to="#"><FaFacebook size="36" /></Link></li>
            <li><Link to="#"><FaLinkedin size="36" /></Link></li>

          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer;