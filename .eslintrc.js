module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['react', 'react-native', 'import', 'prettier', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  globals: {
    device: false,
    expect: false,
    waitFor: false,
    element: false,
    by: false,
  },
  rules: {
    'no-console': 'error',
    'prettier/prettier': 'error',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-boolean-value': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 'error',
    'react-native/no-raw-text': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-param-reassign': 'error',
    'no-empty': [
      'warn',
      {
        allowEmptyCatch: true,
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react+(|-native)',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'id-length': [
      2,
      {
        exceptions: ['t'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
