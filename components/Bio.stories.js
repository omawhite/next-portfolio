import React from 'react';
import Bio from './Bio';

export default {
  component: Bio,
  title: 'Components/Bio',
};

const Template = (args) => (
  <div>
    <Bio {...args} />
  </div>
);

export const Default = Template.bind();
