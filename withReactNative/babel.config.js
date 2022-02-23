module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@architecture': './src/architecture',
          '@components': './src/architecture/components',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
