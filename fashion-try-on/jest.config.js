/* eslint-env node */
/* eslint-disable no-undef */
module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  preset: 'jest-expo',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-native-svg|@react-navigation/.*)',
  ],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  globals: {
    __DEV__: true,
  },
};
