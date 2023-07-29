import React from 'react';
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/Layout';
import BlogPostsList from '../components/BlogPostList';
import { generateRSSFeed } from '../lib/feed';

export default function Blog({ allPostsData }) {
  return (
    <Layout showBackToHomeLink>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="A blog by Omar Louis White" />
      </Head>
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
