import { ExpoConfig } from 'expo/config'

const config: ExpoConfig = {
  name: 'mathgame',
  slug: 'mathgame',
  version: '0.2.0',
  sdkVersion: '49.0.0',
  platforms: ['ios', 'android', 'web'],
  android: {
    package: 'rusber364.mathgame',
  },
  ios: {
    bundleIdentifier: 'rusber364.mathgame',
  },
  scheme: 'myapp',
  web: {
    bundler: 'metro',
  },
  experiments: {
    tsconfigPaths: true,
  },
}

export default config
