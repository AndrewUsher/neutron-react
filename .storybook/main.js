/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-a11y/register'
  ]
}
