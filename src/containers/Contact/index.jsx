import React from 'react'
import "./contact.scss";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useState } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrbqwojr", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setLoading(false);
        toast.success("Thanks for reaching out! I'll get back to you soon.", );
        form.reset();
      } else {
        setLoading(false);
        toast.error("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error! Check your connection and try again.");
    }
  };
  return (
    <section className="contact">
  <div className="contact__overlay">
    <div className="contact__wrapper">
      <div className="contact__info">
        <h2>Let's Work Together</h2>
        <p>Have a project in mind or just want to connect? I’d love to hear from you. Drop a message and I’ll get back to you soon.</p>
        <div className="contact__details">
          <p><strong>Email:</strong> <a href="mailto:kemeyone@gmail.com?subject=Let's Work Together&body=Hi Kemi, I saw your portfolio and...">kemeyone@gmail.com</a></p>
          <p><strong>Location:</strong> Remote / Available Worldwide</p>
        </div>
      </div>
      <form className="contact__form" onSubmit={(e) => handleSubmit(e)}>
        <input 
         type="text"
         placeholder="Your Name"
         required
         name="name" 
        />
        <input 
         type="email" 
         placeholder="Your Email" 
         required 
         name="email"
        />
        <textarea 
         placeholder="Your Message"
         rows="5" 
         required></textarea>
        <button type="submit">
        {loading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              style={{
                border: "3px solid #ccc",
                borderTop: "3px solid black",
                borderRadius: "50%",
                width: 20,
                height: 20,
                margin: "auto",
              }}
            />
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  </div>
</section>


  )
}

export default Contact