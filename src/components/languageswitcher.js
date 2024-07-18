import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

import Flag from '../pictures/flag.png';

const languageOptions = [
  { code: 'en', label: 'ENG', flag: Flag },
  { code: 'gu', label: 'GUJ', flag: Flag },
  { code: 'hi', label: 'HIN', flag: Flag }
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = languageOptions.find(lng => lng.code === i18n.language) || languageOptions[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng.code);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center rounded-md px-2 py-1 text-m font-medium text-gray-100 hover:scale-110 hover:text-gray-400"
      >
        <img src={currentLanguage.flag} alt={currentLanguage.label} className="h-4 w-4 mr-1" />
        {currentLanguage.label}
        {isOpen ? (
          <ChevronUpIcon className="ml-2 h-5 w-5" aria-hidden="true" />
        ) : (
          <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-28 origin-top-right"style={{ backgroundColor: '#043464' }}>
          <div className="p-1">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                onClick={() => changeLanguage(option)}
                className="flex items-center px-4 py-2 text-m font-medium text-gray-100 hover:scale-110 hover:text-gray-400 w-full"
              >
                <img src={option.flag} alt={option.label} className="h-4 w-4 mr-2" />
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
