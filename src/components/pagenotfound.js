import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { Player } from '@lottiefiles/react-lottie-player'; // Import Player component
import animationData from '../animations/Animation - 1718180445410.json'; // Adjust the path to your JSON file

const PageNotFound = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Lottie Animation */}
      <div style={{ width: '80%', maxWidth: '400px', marginBottom: '2rem' }}>
        <Player
          autoplay
          loop
          src={animationData}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Error Message */}
      <p className="text-2xl font-semibold mb-4">{t('pageNotFound.title')}</p>
      {/* Link Button */}
      <Link to="/">
        <button className="mt-6 px-6 py-3 text-white font-semibold rounded-md hover:text-black" style={{ background: '#32CD32' }}>
          {t('pageNotFound.buttonText')}
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
