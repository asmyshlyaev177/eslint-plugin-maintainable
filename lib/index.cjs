/**
 * @fileoverview Eslint config to keep code in maintainable state
 * @author asmyshlyaev177 <asmyshlyaev177@gmail.com> (https://www.linkedin.com/in/asmyshlyaev177/)
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rules =  require('./rules')
const processors =  require('./processors')
//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = rules

// import processors
module.exports.processors = processors

const _package = require('../package.json')
module.exports.meta = {
  name: _package.name,
  version: _package.version
}

module.exports.configs = {
  recommended: {
    env: {
      es2023: true,
      'shared-node-browser': true,
    },
    parser: '@typescript-eslint/parser',
    processor: 'disable/disable',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2023,
      sourceType: 'module',
      project: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:sonarjs/recommended',
      'plugin:deprecation/recommended',
      'plugin:compat/recommended',
      'plugin:jsonc/recommended-with-jsonc',
    ],
    plugins: [
      '@typescript-eslint',
      'disable',
      'jsx-a11y',
      'unicorn',
      'sonarjs',
      'deprecation',
      'compat',
      'no-secrets',
    ],
    rules: {
      'prettier/prettier': [
        'warn',
        {},
        {
          usePrettierrc: true,
        },
      ],
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'sonarjs/cognitive-complexity': ['error', 9],
      'complexity': ['error', 11],
      'no-secrets/no-secrets': 'error',
      'max-statements': ['error', 30],
      'max-params': ['error', 3],
      'max-nested-callbacks': ['error', 4],
      'max-lines-per-function': [
        'error',
        { max: 150, skipBlankLines: true, skipComments: true },
      ],
      'max-lines': ['error', 400],
      'max-len': ['error', 80],
      'max-depth': ['error', 1]
    },
    overrides: [
      {
        files: ['*.json', '*.json5', '*.jsonc'],
        parser: 'jsonc-eslint-parser',
      },
      {
        files: [
          '*.test.js',
          '*.test.ts',
          '*.test.jsx',
          '*.test.tsx',
          '*.spec.js',
          '*.spec.ts',
          '*.spec.jsx',
          '*.spec.tsx',
        ],
        rules: {
          'sonarjs/no-duplicate-string': 'off',
          'max-statements': 'off',
          'max-lines': 'off',
          'max-lines-per-function': 'off',
          'max-nested-callbacks': ['error', 7]
        },
      },
    ],
  }
}
