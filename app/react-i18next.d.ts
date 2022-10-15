import resources from './langs/en.json'

declare module 'react-i18next' {
  type DefaultResources = typeof resources
  interface Resources extends DefaultResources {}
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources
  }
}
