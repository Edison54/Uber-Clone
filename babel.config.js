module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  //con esto cargamos la key con un import//
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};