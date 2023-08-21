module.exports = function (api) {
  api.cache(true)
  return {
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~': './src',
          },
        },
      ],
      'expo-router/babel',
      '@babel/plugin-transform-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      'react-native-reanimated/plugin',
    ],
  }
}
