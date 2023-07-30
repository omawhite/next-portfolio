import React from 'react';
import Layout from '../components/Layout/LayoutNew';
import Bio from '../components/Bio';
import { getSortedPostsData } from '../lib/posts';

import RecentPosts from 'components/RecentPosts';

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Bio />
      <RecentPosts postsData={allPostsData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
