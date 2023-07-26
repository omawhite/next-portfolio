import React from 'react';
import Layout from './Layout';
import { ComponentMeta } from '@storybook/react';

export default {
  component: Layout,
  title: 'Templates/Layout',
  argTypes: {
    home: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Layout>;

interface ArgTypes {
  home: boolean;
}

const Template = (args: ArgTypes) => (
  <Layout {...args}>
    <p>This is some content</p>
  </Layout>
);

export const Default = Template.bind({});
