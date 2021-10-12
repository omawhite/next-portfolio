import React from 'react';
import Layout from './layout';

export default {
  component: Layout,
  title: 'Components/Layout',
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

export const Default = Template.bind();
