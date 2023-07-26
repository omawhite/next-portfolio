import React from 'react';
import Bio from './Bio';
import { Meta } from '@storybook/react';

export default {
  component: Bio,
  title: 'Components/Bio',
} as Meta<typeof Bio>;

const Template = () => (
  <div>
    <Bio />
  </div>
);

export const Default = {
  render: Template,
};
