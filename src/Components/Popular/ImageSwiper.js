import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { popularPropertyData } from '../../data';
import siolim from '../../Assets/3 bhk siolim/3bhk Siolim locations-02.png';
import morjim from '../../Assets/morjim/WP-MOR 1-02.png';
import sharayu from '../../Assets/Sharayu/IMG20240126175345.jpg';
import bhk from '../../Assets/1bhk (1).png';
import bh from '../../Assets/5bh.png';
import b from '../../Assets/3bhk.png';
const ImageSwiper = () => {

  const imageMap = {
    1: siolim,
    2: morjim,
    3: sharayu,
    4: bhk,
    5: bh,
    6: b
  }
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView="auto"
      //   centeredSlides={true}
      className="mySwiper"
    >
      {popularPropertyData.map((e, i) => (
        <SwiperSlide key={i} style={{ width: '300px' }}>
          <ImageSwiperComponent
            key={i}
            image={imageMap[i+1]}
            rate={e.rate}
            type={e.type}
            location={e.location}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const ImageSwiperComponent = ({ image, rate, location, type }) => {
  return (
    <article
      className="popular__card swiper-slide"
      style={{ width: '300px', marginBottom: '50px' }}
    >
      <img src={image} alt="aff" className="popular__img" />

      <div className="popular__data">
        <h2 className="popular__price">
          <span>₹</span>
          {rate}
        </h2>
        <h3 className="popular__title">{type}</h3>
        <p className="popular__description">{location}</p>
      </div>
    </article>
  );
};

export default ImageSwiper;
