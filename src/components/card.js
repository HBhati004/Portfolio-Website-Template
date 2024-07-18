import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import BgImage from '../pictures/6825772.jpg';
import svgImage from '../pictures/wave.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Card = () => {
  const { t } = useTranslation();
  
  const cards = [
    { image: require("../pictures/brain-tumor-surgery-color-icon-illustration-vector.png"), CardTitle: t('card.services.0') },
    { image: require("../pictures/360_F_506979639_u8HH1Z9CPgxOw3RLeocTI5SI0ELnYk7k.png"), CardTitle: t('card.services.1') },
    { image: require("../pictures/depositphotos_173549848-stock-illustration-vector-logo-template-human-spine.png"), CardTitle: t('card.services.2') },
    { image: require("../pictures/functional-neurosurgery-color-icon-vector-41713773.png"), CardTitle: t('card.services.3') },
    { image: require("../pictures/serv-neuromod.png"), CardTitle: t('card.services.4') },
    { image: require("../pictures/lumbar-puncture.png"), CardTitle: t('card.services.5') },
    { image: require("../pictures/images.png"), CardTitle: t('card.services.6') },
    { image: require("../pictures/Chiari-Malformation-awareness-ribbon-with-zipper.png"), CardTitle: t('card.services.7') },
    { image: require("../pictures/istockphoto-1156870811-612x612.png"), CardTitle: t('card.services.8') },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const swiperInstance = document.querySelector('.swiper').swiper;
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <>
      <div
        className="relative bg-cover bg-center bg-fixed justify-center items-center bg-gray-2 pb-10 pt-32 dark:bg-dark lg:pb-20 lg:pt-36"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <img src={svgImage} className="absolute -top-1 left-0 w-full" alt="Wave" />
        <div className="container items-center text-center content-center relative z-10 mt-20 mx-auto">
          <h2 className="text-4xl text-center font-bold -mt-32 mb-12 text-white">{t('card.title')}</h2>
          <Swiper
            spaceBetween={50}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            modules={[Navigation, Autoplay]}
            className="w-full max-w-6xl"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <SingleCard
                  image={card.image}
                  CardTitle={card.CardTitle}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center lg:justify-end mt-4">
            <button
              ref={prevRef}
              className="text-white text-2xl text-center font-medium rounded-full focus:outline-none hover:text-black mx-2 bg-circle"
              style={{ backgroundColor: '#32CD32', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              ref={nextRef}
              className="text-white text-2xl text-center font-medium rounded-full focus:outline-none hover:text-black mx-2 bg-circle"
              style={{ backgroundColor: '#32CD32', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const SingleCard = ({
  image,
  CardTitle,
}) => {
  return (
    <div
      className="relative mb-10 w-60 max-w-xs h-80 overflow-hidden bg-blue-200 rounded-3xl shadow-2xl duration-300 hover:shadow-3xl mx-auto"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div className="flex-shrink-0 h-4/5 overflow-hidden">
        <img src={image} alt={CardTitle} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow flex items-center justify-center bg-white p-2 text-center shadow-md" style={{ backgroundColor: '#D5DDEB' }}>
        <span className="block text-xl font-semibold text-black">
            {CardTitle}
        </span>
      </div>
    </div>
  );
};

export default Card;
