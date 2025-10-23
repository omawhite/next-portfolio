import React from 'react';
import type { Metadata } from 'next';
import LayoutApp from '@/components/Layout/LayoutApp';
import RecentPosts from '@/components/RecentPosts';
import client from 'tina/__generated__/client';
import HomePageComponent from './HomePage';

export const revalidate = 3600; // invalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const result = await client.queries.page({ relativePath: 'home.md' });
  const pageTitle = result.data.page?.title || 'Home';

  return {
    title: pageTitle,
    description: 'Software Engineer and Developer',
  };
}

export default async function HomePage() {
  // Fetch posts via Tina and sort by most recent
  const postsResponse = await client.queries.postConnection({
    sort: 'date',
    last: -1, // Get all posts
  });

  // Transform Tina posts to match RecentPosts component format
  const allPostsData = (postsResponse.data.postConnection.edges || [])
    .map((edge) => {
      if (!edge?.node) return null;
      const node = edge.node;
      return {
        id: node._sys.filename,
        date: node.date,
        title: node.title,
        description: node.description,
      };
    })
    .filter((post): post is NonNullable<typeof post> => post !== null)
    .sort((a, b) => {
      // Sort by date descending (most recent first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  const result = await client.queries.page({ relativePath: 'home.md' });
  const pageTitle = result.data.page?.title || 'Home';

  return (
    <LayoutApp headerText={pageTitle}>
      <HomePageComponent {...result} />
      <RecentPosts postsData={allPostsData} />
    </LayoutApp>
  );
}
