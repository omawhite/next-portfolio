import React from 'react';
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/LayoutNew';
import BlogPostsList from '../components/BlogPostList';
import { generateRSSFeed } from '../lib/feed';

export default function Blog({ allPostsData }) {
  return (
    <Layout shouldAvatarLinkToHome={true}>
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
