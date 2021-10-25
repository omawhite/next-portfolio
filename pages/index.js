import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import BioBlurb from '../components/BioBlurb';
import { getSortedPostsData } from '../lib/posts';

import BlogPostsList from '../components/BlogPostList';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <BioBlurb />
      <BlogPostsList postsData={allPostsData} />
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
