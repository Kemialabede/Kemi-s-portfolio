import React from 'react'
import "./about.scss"
import Profile from "../../assets/images/kemi.jpeg"
import { motion } from 'framer-motion';


const About = () => {

  const sectionVariants = {
    initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  };

  return (
    <motion.div className='about-container'  
>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >About Me</motion.h2>
        <div className='about-container__content'>
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
            >I'm a results-driven Software Engineer with 5 years of experience building secure, scalable, and high-performing web applications. I specialize in crafting enterprise-grade products and clean, intuitive user interfaces that deliver real business value.
            <br />

            With a strong focus on performance, maintainability, and design, I bring both technical depth and product-thinking to every project. I care deeply about creating meaningful digital experiences that are as delightful as they are robust.
            <br />
            
            Whether I'm optimizing for speed, scaling for growth, or polishing the user experience, I approach every challenge with curiosity, creativity, and a long-term mindset. I thrive in collaborative environments where ideas flow and innovation thrives.
            <br />
            
            My toolkit includes React.js, Next.js, JavaScript, TypeScript, Jest, React Testing Library, and other modern technologies that power today's best web applications.

</motion.p>
<div>
<motion.img src={Profile} alt="my-pics" 
style={{  width: "200px", height: "200px", objectFit: "cover", borderRadius: "50%"}}
      // variants={sectionVariants}
      // initial="initial"             
      // whileInView="animate" 
      // transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }} 
      viewport={{ once: false, amount: 0.5 }}  />
      </div>
        </div>
    </motion.div>
  )
}

export default About