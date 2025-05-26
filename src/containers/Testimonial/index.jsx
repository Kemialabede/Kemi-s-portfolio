// Testimonial.jsx
import React from 'react';
import Review from '../../assets/images/Image.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './testimonial.scss';

const testimonials = [{
  name: "Ademola Onosoga",
  title: "Senior Frontend Engineer",
  quote: "I worked with Kemi while we were both in 'Pragma' Team at Enyata. We worked together on about 3 Projects and some other open-source projects. In the period we worked together, I noticed how dedicated Kemi is to learning; never accepting that a method is magic, wanting to get to the bottom of things, and asking questions. She takes timeline seriously, too seriously sometimes by working odd hours and at family gatherings just to get things.Everyone who knows and has worked with Kemi will agree that she is pleasant to work with, with her sunshine energy."
}, {
  name: "Temitope Aroyewon",
  title:"Frontend Engineer",
  quote: "Working alongside Kemi was an absolute delight! Not only is she a master of front-end development, but she also has an exceptional ability to inspire and mentor others. Her passion for coding shines through in her work, and she consistently raises the bar for excellence. As a mentor, Kemi goes above and beyond to support her peers, sharing her expertise and fostering an environment of growth and collaboration. I'm grateful to have had the opportunity to learn from her and would wholeheartedly recommend Kemi Alabede to any team looking for a skilled front-end developer and mentor."
}, {
  name: "David Igheose",
  title: "Frontend Engineer (Web & Mobile)",
  quote: "Kemi is such a delight to work with. I've had the privilege of working alongside her; she is a solid Frontend engineer who not only excels in her craft but also demonstrates a keen enthusiasm for embracing fresh opportunities and tackling challenges head-on. Enyata is truly fortunate to count her among its team members. I wholeheartedly endorse her and offer my highest recommendation."
},  {
  name: "John Frederick",
  title: "Software developer",
  quote: "Dedicated developer with keen eye for details."
}]

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h2>Testimonials</h2>
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
        <div style={{ display: 'flex', alignItems: 'center'}}>
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial__card">
              <div className="testimonial__content__person">
                <img src={Review} alt={item.name} />
                <div>
                  <h5>{item.name}</h5>
                  <p>{item.title}</p>
                </div>
              </div>
              <p className="testimonial__content__review">"{item.quote}"</p>
            </div>
          </SwiperSlide>
        ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
