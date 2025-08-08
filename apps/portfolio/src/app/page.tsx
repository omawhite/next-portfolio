import React from 'react';
import type { Metadata } from 'next';
import LayoutApp from '@/components/Layout/LayoutApp';
import { getSortedPostsData } from '@/lib/posts';
import RecentPosts from '@/components/RecentPosts';
import { getHomePageContentData } from '@/lib/pageContent';

export const revalidate = 3600 // invalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const { pageTitle } = await getHomePageContentData();

  return {
    title: pageTitle,
    description: 'Software Engineer and Developer',
  };
}

export default async function HomePage() {
  const allPostsData = await getSortedPostsData();
  const { pageTitle, contentHtml } = await getHomePageContentData();

  return (
    <LayoutApp headerText={pageTitle}>
      <section className="max-w-xl w-full">
        <div
          // biome-ignore lint/security/noDangerouslySetInnerHtml: just trust me bro
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </section>
      <RecentPosts postsData={allPostsData} />
    </LayoutApp>
  );
}
