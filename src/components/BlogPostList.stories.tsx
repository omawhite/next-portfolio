import React from 'react';
import BlogPostsList from './BlogPostList';
import { Meta } from '@storybook/react';

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
    postsData: [
      {
        content:
          'The other day I was cleaning out my inbox when I came across a message from [Code Academy](https://www.codecademy.com/). I quickly delete…',

        date: '2018-02-11',
        description:
          'A story about my journey to becoming a software engineer.',
        featuredimage: '/img/5ff6e03f-0ffe-4606-855e-5dfee4556f44.jpeg',
        id: 'how-i-ended-up-a-software-engineer',
        tags: ['My edits'],
        title: 'How I Ended Up A Software Engineer',
      },
      {
        content:
          'The other day I was cleaning out my inbox when I came across a message from [Code Academy](https://www.codecademy.com/). I quickly delete…',

        date: '2018-02-11',
        description:
          'A story about my journey to becoming a software engineer.',
        featuredimage: '/img/5ff6e03f-0ffe-4606-855e-5dfee4556f44.jpeg',
        id: 'how-i-ended-up-a-software-engineer',
        tags: ['My edits'],
        title: 'How I Ended Up A Software Engineer',
      },
      {
        content:
          'The other day I was cleaning out my inbox when I came across a message from [Code Academy](https://www.codecademy.com/). I quickly delete…',

        date: '2018-02-11',
        description:
          'A story about my journey to becoming a software engineer.',
        featuredimage: '/img/5ff6e03f-0ffe-4606-855e-5dfee4556f44.jpeg',
        id: 'how-i-ended-up-a-software-engineer',
        tags: ['My edits'],
        title: 'How I Ended Up A Software Engineer',
      },
      {
        content:
          'The other day I was cleaning out my inbox when I came across a message from [Code Academy](https://www.codecademy.com/). I quickly delete…',

        date: '2018-02-11',
        description:
          'A story about my journey to becoming a software engineer.',
        featuredimage: '/img/5ff6e03f-0ffe-4606-855e-5dfee4556f44.jpeg',
        id: 'how-i-ended-up-a-software-engineer',
        tags: ['My edits'],
        title: 'How I Ended Up A Software Engineer',
      },
      {
        content:
          'The other day I was cleaning out my inbox when I came across a message from [Code Academy](https://www.codecademy.com/). I quickly delete…',

        date: '2018-02-11',
        description:
          'A story about my journey to becoming a software engineer.',
        featuredimage: '/img/5ff6e03f-0ffe-4606-855e-5dfee4556f44.jpeg',
        id: 'how-i-ended-up-a-software-engineer',
        tags: ['My edits'],
        title: 'How I Ended Up A Software Engineer',
      },
    ] as Post[],
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
