module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/prettier'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-quotes': [
      'error',
      'double'
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
