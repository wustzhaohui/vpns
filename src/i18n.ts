import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en/translation.json';
import zhTranslations from './locales/zh/translation.json';
import zhHantTranslations from './locales/zh-Hant/translation.json';
import ruTranslations from './locales/ru/translation.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  zh: {
    translation: zhTranslations,
  },
  'zh-Hant': { // Key for Traditional Chinese
    translation: zhHantTranslations,
  },
  ru: {
    translation: ruTranslations,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh', // Default language if detection fails
    debug: import.meta.env.DEV, // Enable debug in dev mode
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      // Add 'querystring' to detection order if you want to test languages via URL (e.g. ?lng=ru)
      // order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      // lookupQuerystring: 'lng'
    },
    // Explicitly define supported languages for LanguageDetector
    supportedLngs: ['en', 'zh', 'zh-Hant', 'ru'],
  });

export default i18n;