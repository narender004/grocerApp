const moduleResolver = ['babel-plugin-module-resolver', { alias: { '@app': './app' } }];

module.exports = {
  comments: false,
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [moduleResolver, 'transform-remove-console'],
    },
    development: {
      plugins: [moduleResolver],
    },
  },
};
