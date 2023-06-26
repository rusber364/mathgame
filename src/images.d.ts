declare module '*.svg' {
  import type { ImageSourcePropType } from 'react-native'
  const svg: ImageSourcePropType
  export default svg
}

declare module '*.png' {
  import type { ImageSourcePropType } from 'react-native'
  const png: ImageSourcePropType
  export default png
}
