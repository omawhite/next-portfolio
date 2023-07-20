import React from 'react';
import Layout from './Layout';

export default {
  component: Layout,
  title: 'Templates/Layout',
  argTypes: {
    home: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => (
  <Layout {...args}>
    <p>This is some content</p>
  </Layout>
);

export const Default = {
  render: Template,
};
