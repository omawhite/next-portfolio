import React from 'react';
import type { Metadata } from 'next';
import LayoutApp from '@/components/Layout/LayoutApp';
import Bio from '@/components/Bio';
import { getSortedPostsData } from '@/lib/posts';
import RecentPosts from '@/components/RecentPosts';
import { getHomePageContentData } from '@/lib/pageContent';

export async function generateMetadata(): Promise<Metadata> {
  const { pageTitle } = await getHomePageContentData();

  return {
    title: pageTitle,
    description: 'Software Engineer and Developer',
  };
}

export default async function HomePage() {
  const allPostsData = await getSortedPostsData();
  const { pageTitle, bioContentHtml } = await getHomePageContentData();

  return (
    <LayoutApp headerText={pageTitle}>
      <Bio bio={bioContentHtml} />
      <RecentPosts postsData={allPostsData} />
    </LayoutApp>
  );
}
