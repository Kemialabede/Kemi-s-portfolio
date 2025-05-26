import React from 'react';
import { motion } from 'framer-motion';
import HTMLIcon from '../../assets/icons/html.webp';
import CSSIcon from '../../assets/icons/css.svg';
import ViteIcon from '../../assets/icons/Vitejs-logo.svg.png';
import JSIcon from '../../assets/icons/Javascript-shield.svg.png';
import Typescript from '../../assets/icons/Typescript_logo_2020.svg.png';
import Sass from '../../assets/icons/sass.webp';
import NextJS from '../../assets/icons/nextjs-icon-1024x617-rl2bcqfj.png';
import ReduxLogo from '../../assets/icons/redux-logo.svg';
import './skills.scss';

const icons = [
  HTMLIcon, CSSIcon, ViteIcon, JSIcon,
  Typescript, Sass, NextJS, ReduxLogo,
  HTMLIcon, CSSIcon, ViteIcon, JSIcon,
  Typescript, Sass, NextJS, ReduxLogo
];

const Skills = () => {
  // Duplicate icons for seamless loop
  const allIcons = [...icons, ...icons];

  return (
    <div className="skills">
      <motion.div
        className="skills__content"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
      >
        {allIcons.map((icon, i) => (
          <img src={icon} alt={`icon-${i}`} key={i} />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
