import React from 'react';
import "./hero.scss";
import Header from '../../components/Header';
import Typewriter from '../../components/Typewriter';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="overlay" />
        <Header />
      <section className="hero">
        <div className="hero-content">
        <Typewriter
  textBefore="Hi, I'm "
  textSpan="Oluwakemi Alabede"
  typingSpeed={100}
/>
          <p className="hero-subtext">
            I build expressive, animated, high-performance web experiences.<br />
            Senior frontend engineer with expertise in React, SCSS, and interactive UI.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn outline">Contact Me</a>
            <a href="#contact" className="btn yellow_outline">Download CV</a>
          </div>
        </div>
    </section>
    </div>
  )
}

export default Hero