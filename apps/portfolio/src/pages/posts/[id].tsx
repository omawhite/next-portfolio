import React from 'react';
import Layout from '@/components/Layout/LayoutNew';
import { getAllPostIds, getPostData } from '@/lib/posts';
import Head from 'next/head';
import Date from '@/components/Date';
import Link from 'next/link';
import TypographyH1 from '@/components/shadcn/ui/TypographyH1';
import TypographyMuted from '@/components/shadcn/ui/TypographyMuted';
import { cn } from '@/lib/utils';

export default function Post({ postData }) {
  return (
    <Layout
      shouldAvatarLinkToHome={true}
      hideHeaderText={true}
      documentTitle={postData.title}
    >
      <Head>
        <meta name="og:title" content={postData.title} />
        <meta name="description" content={postData.description} />
        <meta name="og:description" content={postData.description} />
        <meta name="og:type" content="article" />
      </Head>
      <article className="max-w-xl">
        <TypographyH1 className="mb-4">{postData.title}</TypographyH1>
        <TypographyMuted>
          <Date dateString={postData.date} />
        </TypographyMuted>
        <div
          className={cn('postContent')}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <div className="self-start mt-12">
          <Link href="/blog"> ← Back to blog</Link>
        </div>
      </article>
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
