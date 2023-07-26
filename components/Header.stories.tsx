import React from 'react';
import Header from './Header';
import { ComponentMeta } from '@storybook/react';

export default {
  component: Header,
  title: 'Components/Header',
  argTypes: {
    home: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Header>;

interface HeaderArgs {
  home: boolean;
}

const Template = (args: HeaderArgs) => <Header {...args} />;

export const Default = Template.bind({});
