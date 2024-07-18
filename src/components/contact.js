import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSquareInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import logo from '../pictures/Logo 1.png';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center mt-4 p-4" style={{ backgroundColor: '#043464', minHeight: '350px' }}>
      {/* Middle div */}
      <div className="md:w-1/3 w-full flex flex-col items-center mb-4 md:mb-0 md:order-2"> {/* Setting order to 2 on medium screens */}
        <div className="flex flex-col items-center mb-4"> {/* Container for icons */}
          <img
            className="w-44 h-auto mb-4"
            src={logo}
            alt="Profile"
          />
          <div className="flex p-2"> {/* Flex container for icons */}
            <a href={t('contact.facebook')} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="mr-4 hover:scale-110 text-white transition-transform duration-200" />
            </a>
            <a href={t('contact.instagram')} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareInstagram} size="2x" className="mr-4 hover:scale-110 text-white transition-transform duration-200" />
            </a>
            <a href={t('contact.twitter')} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} size="2x" className="hover:scale-110 text-white transition-transform duration-200" />
            </a>
          </div>
          <h3 className="text-xl font-semibold text-white">{t('contact.name')}</h3>
        </div>
      </div>
      {/* Email div */}
      <div className="md:w-1/3 w-full flex justify-center mb-4 md:mb-0 md:order-1"> {/* Setting order to 1 on medium screens */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-medium text-gray-100">{t('contact.emailTitle')}</h3>
          <p className="text-gray-200">{t('contact.email')}</p>
        </div>
      </div>
      {/* Contact Number div */}
      <div className="md:w-1/3 w-full flex justify-center md:order-3 mb-4"> {/* Setting order to 3 on medium screens */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-medium text-gray-100">{t('contact.contactNumberTitle')}</h3>
          <p className="text-gray-200">{t('contact.contactNumber')}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
