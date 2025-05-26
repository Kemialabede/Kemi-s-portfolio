import React from 'react'
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
        <div>
            <h5>Senior Frontend Engineer</h5>
            <p>Crafting high performing and scalable web applications.</p>
            <div className="footer__mediaLinks">
                <div>
                    <a href="https://github.com/Kemialabede" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-glyphs/30/github.png" /></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/kemi-alabede/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/50/linkedin.png" /></a>
                </div>
            </div>
        </div>
        <div className="footer__links">
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer