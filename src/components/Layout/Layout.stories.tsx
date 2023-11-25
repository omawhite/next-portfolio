import React from 'react';
import Layout from './Layout';
import { Meta } from '@storybook/react';

export default {
  component: Layout,
  title: 'Templates/Layout',
  argTypes: {
    showBackToHomeLink: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof Layout>;

interface ArgTypes {
  home: boolean;
}

const Template = (args: ArgTypes) => (
  <Layout {...args}>
    <p>This is some content</p>
  </Layout>
);

export const Default = {
  render: Template,
};
