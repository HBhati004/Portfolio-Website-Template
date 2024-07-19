import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import CountUp from 'react-countup';
import profile from '../pictures/profile.png';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    const options = {
      strings: [t('hero.name')],
      typeSpeed: 40,
      showCursor: false,
    };
    typedInstance.current = new Typed(typedElement.current, options);

    // Cleanup
    return () => {
      typedInstance.current.destroy();
    };
  }, [t]);

  useEffect(() => {
    const handleLanguageChange = () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
      const options = {
        strings: [t('hero.name')],
        typeSpeed: 40,
        showCursor: false,
      };
      typedInstance.current = new Typed(typedElement.current, options);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [i18n, t]);

  return (
    <>
      <section className="relative flex flex-col md:flex-row items-center justify-between p-8 pt-16 md:pt-8" style={{ minHeight: '400px', width: '100%', marginTop: '3%', position: 'relative' }}>
        {/* Left Side - Introduction */}
        <div className="w-full p-8 md:w-1/2 text-center md:text-left m-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            {t('hero.greeting')} <span ref={typedElement}></span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-800">
            {t('hero.description')}
          </p>
          <ScrollLink to="appointment" smooth={true} duration={100}>
            <button className="mt-6 px-6 py-3 text-white font-semibold rounded-md hover:text-black" style={{ background: '#32CD32' }}>
              {t('hero.bookAppointment')}
            </button>
          </ScrollLink>
        </div>

        {/* Right Side - Animation and Photo */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center m-4">
          {/* Morphing Circle Animation */}
          <div className="wrap">
            <div className="circle">
              <img src={profile} alt="Doctor" />
              <div className="small-circle-1"></div>
              <div className="small-circle-2"></div>
              <div className="small-circle-3"></div>
              <div className="small-circle-4"></div>
              <div className="small-circle-5"></div>
              <div className="small-circle-7"></div>
              <div className="small-circle-8"></div>
              <div className="small-circle-9"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="flex flex-col md:flex-row items-center justify-around p-4" style={{ backgroundColor: '#2577B9', marginTop: '3%', position: 'relative' }}>
        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-100">
            <CountUp end={200} duration={10} />+
          </h2>
          <p className="text-lg text-gray-200">{t('hero.casesSolved')}</p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-100">
            <CountUp end={500} duration={10} />+
          </h2>
          <p className="text-lg text-gray-200">{t('hero.happyPatients')}</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-100">
            <CountUp end={10} duration={10} />+
          </h2>
          <p className="text-lg text-gray-200">{t('hero.yearsExperience')}</p>
        </div>
      </section>

      <style>{`
        .wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 10;
        }
        .circle {
          background: #659ed3;
          width: 50vw;
          height: 50vw;
          max-width: 300px;
          max-height: 300px;
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          overflow: hidden;
          animation: morph 6s linear infinite;
        }
        .circle img {
          width: 100%;
        }
        @keyframes morph {
          0%, 100% {
            border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
          }
          34% {
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
          }
          67% {
            border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
          }
        }
        .small-circle-1, .small-circle-2, .small-circle-3, .small-circle-4, .small-circle-5, .small-circle-7, .small-circle-8, .small-circle-9 {
          position: absolute;
          background-color: #659ed3;
          border-radius: 50%;
          animation: morph 3s linear infinite;
        }
        .small-circle-1 { width: 35px; height: 35px; top: -5px; right: -14%; }
        .small-circle-2 { width: 20px; height: 20px; top: 50px; right: -10%; }
        .small-circle-3 { width: 8px; height: 8px; top: 18px; right: 4%; }
        .small-circle-4 { width: 14px; height: 14px; bottom: 30px; right: -5%; }
        .small-circle-5 { width: 22px; height: 22px; bottom: -10px; right: 6%; }
        .small-circle-7 { width: 11px; height: 11px; bottom: 0px; left: 14%; }
        .small-circle-8 { width: 28px; height: 28px; top: 30px; left: -10%; }
        .small-circle-9 { width: 7px; height: 7px; top: 7px; left: 7%; }
      `}</style>
    </>
  );
};

export default Hero;
