// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/testSetup.js', '@testing-library/jest-native/extend-expect'],
  testPathIgnorePatterns: ['/node_modules/', '(/__tests__/*.|\\e2e)\\.(ts|tsx|js)$'],
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native/.*|react-navigation|@react-navigation/.*))',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/src/__mocks__/svgMock.tsx',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
};
