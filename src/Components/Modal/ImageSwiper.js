import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { useParams } from 'react-router-dom';
import { getPropertyByKey } from '../../ApiFunctions/Properties-Api';

SwiperCore.use([Navigation]);
const ImageSwiper = () => {
  const [data, setData] = useState([]);

  const { key } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPropertyByKey(key);
        console.log('response', response?.[0]?.pictures);
        setData(response?.[0]?.pictures);
      } catch (error) {
        console.error('Error fetching blog:', error.message);
      }
    };

    fetchData();
  }, []);

  if (data?.length === 0) {
    return null;
  }
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView="1"
      centeredSlides={true}
      className="mySwiper"
      navigation={true}
      pagination={true}
    >
      {data?.map((e, i) => (
        <SwiperSlide
          key={i}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ImageSwiperComponent key={i} image={e} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const ImageSwiperComponent = ({ image }) => {
  return (
    <article className="modal__card">
      <img src={image} alt="aff" className="modal__img" />
    </article>
  );
};

export default ImageSwiper;
