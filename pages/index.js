import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Bio from '../components/Bio';
import { getSortedPostsData } from '../lib/posts';
import { generateRSSFeed } from '../lib/feed';

import BlogPostsList from '../components/BlogPostList';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Bio />
      <BlogPostsList postsData={allPostsData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  // console.dir(allPostsData); //uncomment if you need to debug feed generation
  generateRSSFeed(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}
