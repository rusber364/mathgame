import { resources } from './langs/translation'

declare module 'react-i18next' {
  type DefaultResources = typeof resources['en']
  interface Resources extends DefaultResources {}
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources['en']
  }
}
