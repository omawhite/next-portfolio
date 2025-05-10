import React from 'react';
import { getSortedPostsData } from '@/lib/posts';
import Layout from '@/components/Layout/LayoutNew';
import BlogPostsList from '@/components/BlogPostList';
import { generateRSSFeed } from '@/lib/feed';

export default function Blog({ allPostsData }) {
  return (
    <Layout
      shouldAvatarLinkToHome={true}
      headerText="Blog"
      documentTitle="Blog"
    >
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
