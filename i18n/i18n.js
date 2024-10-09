import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './local/en.json'
import es from './local/es.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
  lng: localStorage.getItem('language'),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
