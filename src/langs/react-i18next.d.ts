import 'i18next'

import resources from './data/en.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en'
    resources: typeof resources
  }
}
