import React from 'react';
import Date from './Date';
import { Meta } from '@storybook/react';

export default {
  components: Date,
  title: 'Components/Date',
  argTypes: {
    dateString: {
      defaultValue: '2021-01-01T00:00:00.000Z',
      control: { type: 'date' },
    },
  },
} as Meta<typeof Date>;

interface DateArgs {
  dateString: string;
}

const Template = (args: DateArgs) => <Date {...args} />;

export const Default = {
  render: Template,
};
