import React from 'react';
import RecentPosts from './RecentPosts';
import { Meta } from '@storybook/react';
import { postDataList } from './__tests__/postsData.fixture';

//TODO need a unified type for this across components and utilities
interface Post {
  id: string;
  date: string;
  title: string;
  content?: string;
  description?: string;
  featuredimage?: string;
  tags?: string[];
}

export default {
  component: RecentPosts,
  title: 'Components/RecentPosts',
  args: {
    postsData: postDataList,
  },
} as Meta<typeof RecentPosts>;

interface Args {
  postsData: Post[];
}

const Template = (args: Args) => (
  <div>
    <RecentPosts {...args} />
  </div>
);

export const Default = {
  render: Template,
};
