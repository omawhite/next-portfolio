import React from 'react';
import BlogPostsList from './BlogPostList';
import { Meta } from '@storybook/react';
import { postDataList } from './__tests__/postsData.fixture';

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
  component: BlogPostsList,
  title: 'Components/BlogPostsList',
  args: {
    postsData: postDataList,
  },
} as Meta<typeof BlogPostsList>;

interface Args {
  postsData: Post[];
}

const Template = (args: Args) => (
  <div>
    <BlogPostsList {...args} />
  </div>
);

export const Default = {
  render: Template,
};
