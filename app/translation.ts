import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ru from './langs/ru.json'
import en from './langs/en.json'

export const resources = { en, ru } as const

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})
