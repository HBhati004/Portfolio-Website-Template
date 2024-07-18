import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Import translation files
import translationEN from '../locales/en/translation.json';
import translationGU from '../locales/gu/translation.json';
import translationHI from '../locales/hi/translation.json';

// Define the resources
const resources = {
  en: {
    translation: translationEN
  },
  gu: {
    translation: translationGU
  },
  hi: {
    translation: translationHI
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // default language
    debug: true,
    detection: {
      // Order and from where user language should be detected
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
      // Cache user language on
      caches: ['localStorage', 'cookie']
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
