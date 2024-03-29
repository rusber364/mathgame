import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import * as resources from './data'

const { en, ukr, de, fra, pol, ru, ...other } = resources

type LanguageKeys = (keyof typeof resources)[]

export const languageKeys = Object.keys({ en, ukr, de, fra, pol, ru, ...other }) as LanguageKeys

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'en',
    resources,
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
