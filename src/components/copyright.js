import React from 'react';
import { useTranslation } from 'react-i18next';

const Copyright = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const text = t('copyright.text', { year });

  return (
    <div className="py-4 text-m border-t-4 font-medium text-center text-gray-100" style={{ backgroundColor: '#043464' }}>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default Copyright;
