'use strict';

module.exports = {
  plugins: ['node', 'eslint-plugin', 'self'],
  extends: [
    'not-an-aardvark/node',
    'plugin:node/recommended',
    'plugin:eslint-plugin/recommended',
    'prettier'
  ],
  root: true,
  rules: {
    'self/import-sort': ['error'],
    'prettier/prettier': ['error'],
    'eslint-plugin/report-message-format': ['error', '^[^a-z].*\\.$']
  }
};
