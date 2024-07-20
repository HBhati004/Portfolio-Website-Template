import React from 'react';
import { useTranslation } from 'react-i18next';

const Copyright = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const text = t('copyright.text', { year });

  return (
    <div className="py-4 border-t-4 font-medium text-center text-gray-100" style={{ backgroundColor: '#043464' }}>
      <div className="flex items-center justify-center space-x-4">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Copyright;
