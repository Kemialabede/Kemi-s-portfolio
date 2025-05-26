import { useEffect, useState } from 'react'
import './App.scss'
import Footer from './components/Footer'
import About from './containers/About'
import Contact from './containers/Contact'
import Hero from './containers/Hero/Hero'
import Projects from './containers/Projects'
import Skills from './containers/Skills'
import Testimonial from './containers/Testimonial'
import { motion } from 'framer-motion';
import Loader from './components/Loader'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide the loader after 3 seconds
    }, 3000); // Adjust the timeout to match your content load time
  }, []);

  return (
    <>
    {loading ? <Loader /> : <motion.div   initial={{ opacity: 0 }} // Start with content hidden
          animate={{ opacity: 1 }}  // Fade content in
          transition={{
            duration: 1,         // Duration of the fade-in
            ease: 'easeOut',     // Smooth easing
          }}>
      <Hero />
      <section id="about">
        <About />
      </section>
      <motion.div className="hero2"   // Zoom in by scaling up on hover
  ></motion.div>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <Footer />
      </motion.div>}
      <ToastContainer position="top-right" autoClose={4000} />
    </>
  )
}

export default App
