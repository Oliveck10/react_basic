module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
      'no-console': 0,
      'no-else-return': 0,
      'new-cap': 0,
      'no-unused-vars': 0,
      'no-var': 0,
      'react/jsx-filename-extension': 0,
      'react/prefer-stateless-function': 0,
  }
};
