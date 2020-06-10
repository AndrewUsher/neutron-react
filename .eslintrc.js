module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    '@drewster',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'react/prop-types': 0,
    'jsx-a11y/alt-text': 0
  }
}
