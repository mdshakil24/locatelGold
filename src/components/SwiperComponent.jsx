// SwiperComponent.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import Swiper's modules
import { Pagination, Autoplay } from 'swiper/modules';

// Import necessary modules for Swiper
const SwiperComponent = ({ children }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]} // Specify modules
      spaceBetween={10} // Space between slides
      slidesPerView={1} // Number of slides to show at once
      loop={true} // Enable looping of slides
      autoplay={{
        delay: 2500, // Slide delay
        disableOnInteraction: false, // Keep autoplay running when interacting with slides
      }}
      navigation // Enable next/prev arrows
      pagination={{ clickable: true }} // Enable pagination
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
