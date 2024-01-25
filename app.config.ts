import { ExpoConfig } from 'expo/config'

const config: ExpoConfig = {
  name: 'mathgame',
  slug: 'mathgame',
  version: '0.2.0',
  sdkVersion: '50.0.0',
  platforms: ['ios', 'android', 'web'],
  android: {
    package: 'com.rusber364.mathgame',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  ios: {
    bundleIdentifier: 'com.rusber364.mathgame',
    supportsTablet: true,
  },
  scheme: 'app',
  web: {
    bundler: 'metro',
    favicon: './assets/favicon.png',
  },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  jsEngine: 'hermes',
  extra: {
    eas: {
      projectId: 'a1be118d-94ce-470c-bd53-ab75a92b0dd1',
    },
  },
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  plugins: ['expo-router'],
}

export default config
