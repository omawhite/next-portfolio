import React from 'react';
import type { Metadata } from 'next';
import LayoutApp from '@/components/Layout/LayoutApp';
import DateComponent from '@/components/Date';
import Link from 'next/link';
import TypographyH1 from '@/components/shadcn/ui/TypographyH1';
import TypographyMuted from '@/components/shadcn/ui/TypographyMuted';
import {client} from 'tina/__generated__/client'
import {TinaMarkdown} from 'tinacms/dist/rich-text'

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const revalidate = 3600 // invalidate every hour

export async function generateStaticParams() {
  const postsResponse = await client.queries.postConnection();
  const edges = postsResponse.data.postConnection.edges || [];
  const paths = edges
    .map(edge => {
      return edge?.node?._sys.filename})
    .filter((filename): filename is string => typeof filename === 'string');
  return paths.map((path) => ({
    id: path,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await client.queries.post({relativePath: `${id}.md`})
  const postData = post.data.post;

  return {
    title: postData.title,
    description: postData.description,
    openGraph: {
      title: postData.title,
      description: postData.description,
      type: 'article',
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await client.queries.post({relativePath: `${id}.md`})
  const postData = post.data.post;

  return (
    <LayoutApp shouldAvatarLinkToHome={true} hideHeaderText={true}>
      <article className="max-w-xl">
        <TypographyH1 className="mb-4">{postData.title}</TypographyH1>
        <TypographyMuted>
          <DateComponent dateString={postData.date} />
        </TypographyMuted>
        <div className='postContent'>
        <TinaMarkdown content={postData.body} />
        </div>
        <div className="self-start mt-12">
          <Link href="/blog"> ← Back to blog</Link>
        </div>
      </article>
    </LayoutApp>
  );
}
