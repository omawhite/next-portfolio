import React from 'react';
import Bio from './Bio';
import { ComponentMeta } from '@storybook/react';

export default {
  component: Bio,
  title: 'Components/Bio',
} as ComponentMeta<typeof Bio>;

const Template = () => (
  <div>
    <Bio />
  </div>
);

export const Default = Template.bind({});
