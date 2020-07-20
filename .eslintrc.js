module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['babel', 'react', 'prettier'],
  rules: {
    'react/no-deprecated': 0
  },
  settings: {
    react: {
      pragma: 'ToyReact'
    }
  }
}
