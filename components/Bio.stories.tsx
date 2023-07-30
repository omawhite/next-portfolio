import Bio from './Bio';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Bio> = {
  component: Bio,
  title: 'Components/Bio',
  argTypes: {
    bio: {
      control: 'text',
    },
  },
  args: {
    bio: `<p>Hi this is a bio</p>`,
  },
};

export default meta;
type Story = StoryObj<typeof Bio>;

export const Default: Story = {};

export const LongerBio: Story = {
  args: {
    bio: `<p>Hi my name is Omar, I’m a software engineer that specializes in creating great front end experiences, primarily using react. When I’m not engineering I like to game and make music.</p>`,
  },
};

export const WithLink: Story = {
  args: {
    bio: `<p>Hi my name is Omar, I’m a software engineer that specializes in creating great front end experiences, primarily using react. When I’m not engineering I like to game and make music. <a href="https://www.google.com">This is a link to Google</a> </p>`,
  },
};

export default meta;
type Story = StoryObj<typeof Bio>;

export const Default: Story = {};

export const LongerBio: Story = {
  args: {
    bio: `<p>Hi my name is Omar, I’m a software engineer that specializes in creating great front end experiences, primarily using react. When I’m not engineering I like to game and make music.</p>`,
  },
};

export const WithLink: Story = {
  args: {
    bio: `<p>Hi my name is Omar, I’m a software engineer that specializes in creating great front end experiences, primarily using react. When I’m not engineering I like to game and make music. <a href="https://www.google.com">This is a link to Google</a> </p>`,
  },
};
