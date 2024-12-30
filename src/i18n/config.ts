'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import zh from './zh.json';

// Only initialize if it hasn't been initialized already
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
      en,
      zh,
    },
    ns: ['translations'],
    defaultNS: 'translations',
  });
}

export default i18n;