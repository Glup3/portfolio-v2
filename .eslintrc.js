module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'airbnb-typescript/base',
    'plugin:react/recommended',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    'no-console': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-cycle': 'off',
    'no-underscore-dangle': 'off',
    'prettier/prettier': 'error',
    'no-plusplus': 'off'
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    }
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'node': {
        'extensions': [
          '.jsx',
          '.tsx',
          '.js',
          '.ts',
          '.d.ts'
        ]
      }
    }
  },
  env: {
    'browser': true
  }
};
