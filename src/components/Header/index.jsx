import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./header.scss";

const mobileMenuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 0.3 }
  }
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="header-container">
        <div>
          <h2 className="header-container__role">Frontend Developer</h2>
        </div>
        <ul className="header-container__list">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          {/* <li><a href="#blog">Blog</a></li> */}
          <li><a href="#about">About</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="mobile-header">
        <h2 className="mobile-header__role">Frontend Developer</h2>
        <button className="mobile-header__hamburger" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <button className="mobile-menu__close" onClick={toggleMobileMenu}>✕</button>
            <ul className="mobile-menu__list">
              <li><a onClick={toggleMobileMenu} href="#projects">Projects</a></li>
              <li><a onClick={toggleMobileMenu} href="#skills">Skills</a></li>
              {/* <li><a onClick={toggleMobileMenu} href="#blog">Blog</a></li> */}
              <li><a onClick={toggleMobileMenu} href="#about">About</a></li>
              <li><a onClick={toggleMobileMenu} href="#testimonials">Testimonials</a></li>
              <li><a onClick={toggleMobileMenu} href="#contact">Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
