import React from 'react'
import './testimonials.css'
import Data from './data'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">
        Testimonios
      </h2>
      <Swiper className="testimonials__container grid" modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {Data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonials__item" key={id}>
              <div className='thumb'>
                <img src={image} alt={title} />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="testimonials__subtitle">{subtitle}</span>
              <p className="testimonials__comment">{comment}</p>

            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials