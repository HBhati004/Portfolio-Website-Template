import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import svgComma from '../pictures/comma.svg';
import svgComma2 from '../pictures/comma2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      <svg className="absolute top-0 left-0 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.93845 68.3511L63.8103 6.47926L2.292 157.8L155.381 4.71149L21.0303 232.4L242.355 11.0755L46.4862 296.039L340.289 2.23662L57.4463 366.397L412.767 11.0755L61.689 438.521L482.771 17.4394" stroke="#2577B9" strokeWidth="8" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M482.834 372.17L420.963 434.042L482.481 282.721L329.392 435.81L463.743 208.122L242.418 429.446L438.287 144.482L144.484 438.285L427.327 74.1249L72.0054 429.446L423.084 1.99997L2.00184 423.082" stroke="#2577B9" strokeWidth="8" />
      </svg>

      <h2 className="text-3xl font-bold text-black text-center py-8 z-10">Testimonial</h2>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full max-w-4xl"
      >
        <SwiperSlide>
          <div className="rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center">
            <div className="relative flex flex-col items-center md:items-start md:w-2/3">
              <img
                src={svgComma}
                alt="Left Comma"
                className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8"
              />
              <p className="text-gray-800 text-center md:text-left text-lg md:text-xl m-8 px-4">
                This is an amazing testimonial that highlights the exceptional service provided. It has truly made a difference in my experience.
              </p>
              <img
                src={svgComma2}
                alt="Right Comma"
                className="absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 h-8 w-8"
              />
            </div>
            <div className="flex flex-col items-center mt-4 md:mt-0 md:w-1/3">
              <img
                className="w-24 h-24 rounded-full mb-4"
                src="https://via.placeholder.com/150"
                alt="User Profile"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-800">CEO, Company Inc.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center">
            <div className="relative flex flex-col items-center md:items-start md:w-2/3">
              <img
                src={svgComma}
                alt="Left Comma"
                className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8"
              />
              <p className="text-gray-800 text-center md:text-left text-lg md:text-xl m-8 px-4">
                This is an amazing testimonial that highlights the exceptional service provided. It has truly made a difference in my experience.
              </p>
              <img
                src={svgComma2}
                alt="Right Comma"
                className="absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 h-8 w-8"
              />
            </div>
            <div className="flex flex-col items-center mt-4 md:mt-0 md:w-1/3">
              <img
                className="w-24 h-24 rounded-full mb-4"
                src="https://via.placeholder.com/150"
                alt="User Profile"
              />
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-gray-800">CTO, Company Inc.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center">
            <div className="relative flex flex-col items-center md:items-start md:w-2/3">
              <img
                src={svgComma}
                alt="Left Comma"
                className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8"
              />
              <p className="text-gray-800 text-center md:text-left text-lg md:text-xl m-8 px-4">
                This is an amazing testimonial that highlights the exceptional service provided. It has truly made a difference in my experience.
              </p>
              <img
                src={svgComma2}
                alt="Right Comma"
                className="absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 h-8 w-8"
              />
            </div>
            <div className="flex flex-col items-center mt-4 md:mt-0 md:w-1/3">
              <img
                className="w-24 h-24 rounded-full mb-4"
                src="https://via.placeholder.com/150"
                alt="User Profile"
              />
              <h3 className="text-xl font-semibold">Sam Smith</h3>
              <p className="text-gray-800">CFO, Company Inc.</p>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlide components for additional testimonials */}
      </Swiper>
      <div className="flex justify-center mt-4 space-x-4 z-10">
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
  );
};

export default Testimonial;
