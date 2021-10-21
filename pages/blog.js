import React from 'react';
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import BlogPostsList from '../components/BlogPostList';

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <BlogPostsList postsData={allPostsData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  // console.dir(allPostsData); //uncomment if you need to debug feed generation
  // generateRSSFeed(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}
