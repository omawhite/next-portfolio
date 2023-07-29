import React from 'react';
import Layout from './LayoutNew';
import { Meta } from '@storybook/react';

export default {
  component: Layout,
  title: 'Templates/LayoutNew',
} as Meta<typeof Layout>;

interface ArgTypes {}

const Template = (args: ArgTypes) => (
  <Layout {...args}>
    <p>This is some content</p>
  </Layout>
);

export const Default = {
  render: Template,
};
