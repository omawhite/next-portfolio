import React from 'react';
import type { Metadata } from 'next';
import LayoutApp from '@/components/Layout/LayoutApp';
import { getSortedPostsData } from '@/lib/posts';
import RecentPosts from '@/components/RecentPosts';
import client from 'tina/__generated__/client';
import HomePageComponent from './HomePage';

export const revalidate = 3600; // invalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  // const { pageTitle } = await getHomePageContentData();
  const result = await client.queries.page({ relativePath: 'home.md' });
  const pageTitle = result.data.page?.title || 'Home';

  return {
    title: pageTitle,
    description: 'Software Engineer and Developer',
  };
}

export default async function HomePage() {
  const allPostsData = await getSortedPostsData();
  const result = await client.queries.page({ relativePath: 'home.md' });
  const pageTitle = result.data.page?.title || 'Home';

  return (
    <LayoutApp headerText={pageTitle}>
      <HomePageComponent {...result} />
      <RecentPosts postsData={allPostsData} />
    </LayoutApp>
  );
}
