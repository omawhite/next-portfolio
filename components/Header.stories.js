import React from 'react';
import Header from './Header';

export default {
  component: Header,
  title: 'Components/Header',
  argTypes: {
    home: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = {};
