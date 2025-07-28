import React from 'react';
import type { Metadata } from 'next';
import { getSortedPostsData } from '@/lib/posts';
import LayoutApp from '@/components/Layout/LayoutApp';
import BlogPostsList from '@/components/BlogPostList';
import { generateRSSFeed } from '@/lib/feed';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog posts and articles',
};

export default async function BlogPage() {
  const allPostsData = await getSortedPostsData();

  // Generate RSS feed
  generateRSSFeed(allPostsData);

  return (
    <LayoutApp shouldAvatarLinkToHome={true} headerText="Blog">
      <BlogPostsList postsData={allPostsData} />
    </LayoutApp>
  );
}
