/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../stories')
        ]
      }
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-a11y/register'
  ]
}
