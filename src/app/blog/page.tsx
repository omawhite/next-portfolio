import React from 'react';
import type { Metadata } from 'next';
import LayoutApp from '@/components/Layout/LayoutApp';
import BlogPostsList from '@/components/BlogPostList';
import { generateRSSFeed } from '@/lib/feed';
import client from 'tina/__generated__/client';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog posts and articles',
};

export default async function BlogPage() {
  // Fetch all posts via TinaCMS
  const postsResponse = await client.queries.postConnection({
    sort: 'date',
    last: -1, // Get all posts
  });

  // Transform Tina posts to match BlogPostsList component format
  const allPostsData = (postsResponse.data.postConnection.edges || [])
    .map((edge) => {
      if (!edge?.node) return null;
      const node = edge.node;
      return {
        id: node._sys.filename,
        date: node.date,
        title: node.title,
        description: node.description,
        // For RSS feed, we need content as a string
        // Since body is rich-text JSON, we'll use description for now
        content: node.description || '',
      };
    })
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .sort((a, b) => {
      // Sort by date descending (most recent first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  // Generate RSS feed
  generateRSSFeed(allPostsData);

  return (
    <LayoutApp shouldAvatarLinkToHome={true} headerText="Blog">
      <BlogPostsList postsData={allPostsData} />
    </LayoutApp>
  );
}
