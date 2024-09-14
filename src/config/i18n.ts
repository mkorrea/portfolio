import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import global_en from '../translations/en/global.json';
import global_pt from '../translations/pt/global.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: true },
    lng: 'pt', // idioma padrão
    resources: {
      en: {
        global: global_en,
      },
      pt: {
        global: global_pt,
      },
    },
    detection: {
      order: ['localStorage', 'cookie', 'sessionStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;