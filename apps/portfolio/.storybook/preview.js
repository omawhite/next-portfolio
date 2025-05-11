import '@/styles/global.css';
import '@/styles/utils.module.css';

import { withThemeByClassName } from '@storybook/addon-styling';

export const parameters = {
  //the migration told me not to do this
  // actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  // Adds theme switching support.
  // NOTE: requires setting "darkMode" to "class" in your tailwind config
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];
export const tags = ['autodocs'];
