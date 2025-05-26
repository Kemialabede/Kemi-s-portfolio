import React from 'react'
import { data } from './data';
import ProjectImage from "../../assets/images/project.png";
import "./project.scss";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const Projects = () => {
  return (
    <div className="projects">
        <motion.h2  
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{  once: false, amount: 0.3 }} 
        className="projects__heading">
            Featured Projects</motion.h2>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
            {data?.map((item, index) => {
                return(
                    <SwiperSlide key={index}>
                        <motion.div className="projects__list__item"
                        // initial={{ opacity: 0, y: 30 }}
                        // whileInView={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.5 }}
                        >
                            <img src={item.image} />
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                        </motion.div>
                    </SwiperSlide>
                )
            })}
            </Swiper>
    </div>
  )
}

export default Projects