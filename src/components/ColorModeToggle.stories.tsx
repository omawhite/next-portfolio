import type { Meta, StoryObj } from '@storybook/react';

import ColorModeToggle from './ColorModeToggle';

const meta: Meta<typeof ColorModeToggle> = {
  component: ColorModeToggle,
  title: 'Components/ColorModeToggle',
  args: {},
};

export default meta;

type Story = StoryObj<typeof ColorModeToggle>;

export const Primary: Story = {};
