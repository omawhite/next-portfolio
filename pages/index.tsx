import React from 'react';
import Layout from '../components/Layout/LayoutNew';
import Bio from '../components/Bio';
import { getSortedPostsData } from '../lib/posts';

import RecentPosts from 'components/RecentPosts';
import { getHomePageContentData } from 'lib/pageContent';

interface HomePageProps {
  allPostsData: any;
  pageTitle: string;
  bioContentHtml: string;
}

export default function Home({
  allPostsData,
  pageTitle,
  bioContentHtml,
}: HomePageProps) {
  return (
    <Layout headerText={pageTitle}>
      <Bio bio={bioContentHtml} />
      <RecentPosts postsData={allPostsData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  const { pageTitle, bioContentHtml } = await getHomePageContentData();
  return {
    props: {
      allPostsData,
      pageTitle,
      bioContentHtml,
    },
  };
}
