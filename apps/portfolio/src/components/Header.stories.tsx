import Header from './Header';
import { Meta } from '@storybook/react';

export default {
  component: Header,
  title: 'Components/Header',
  argTypes: {
    home: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof Header>;

interface HeaderArgs {
  home: boolean;
}

export const Default = {};
