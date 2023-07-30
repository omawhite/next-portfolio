import React from 'react';
import Layout from '../components/LayoutNew';
import BioBlurb from '../components/Bio';
import { getSortedPostsData } from '../lib/posts';

import RecentPosts from 'components/RecentPosts';

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <BioBlurb />
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
