module.exports = {
  stories: [
    // Paths to the story files
    '../components/*.stories.mdx',
    '../components/*.stories.js',
    '../components/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  typescript: {
    check: false,
    checkOptions: {},
    // taken from this issue: https://github.com/hipstersmoothie/react-docgen-typescript-plugin/issues/78s
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
