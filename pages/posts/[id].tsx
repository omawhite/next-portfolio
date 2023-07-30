import React from 'react';
// import Layout from '../../components/Layout/Layout';
import Layout from '../../components/Layout/LayoutNew';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/Date';
import Link from 'next/link';

export default function Post({ postData }) {
  return (
    <Layout shouldAvatarLinkToHome>
      <Head>
        <title>{postData.title}</title>
        <meta name="og:title" content={postData.title} />
        <meta name="description" content={postData.description} />
        <meta name="og:description" content={postData.description} />
        <meta name="og:type" content="article" />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div className="mt-12">
        <Link href="/blog"> ← Back to blog</Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
