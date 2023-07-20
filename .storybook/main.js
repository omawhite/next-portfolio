module.exports = {
  stories: [
  // Paths to the story files
  '../components/*.stories.mdx', '../components/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-css-modules-preset'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  }
};