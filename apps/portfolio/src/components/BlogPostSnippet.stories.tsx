import React from 'react';
import BlogPostSnippet from './BlogPostSnippet';
import utilStyles from '@/styles/utils.module.css';
import { Meta } from '@storybook/react';
import { postData } from './__tests__/postsData.fixture';

export default {
  component: BlogPostSnippet,
  title: 'Components/BlogPostSnippet',
  args: {
    content: postData.content,
    date: postData.date,
    description: postData.description,
    featuredimage: postData.featuredimage,
    id: postData.id,
    tags: postData.tags,
    title: postData.title,
  },
} as Meta<typeof BlogPostSnippet>;

interface StoryProps {
  id: string;
  date: string;
  title: string;
  content: string;
}

const Template = (args: StoryProps) => (
  <ul className={utilStyles.list}>
    <BlogPostSnippet {...args} />
  </ul>
);

export const Post = {
  render: Template,
};
