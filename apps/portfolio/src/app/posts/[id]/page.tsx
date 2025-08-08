import React from 'react';
import type { Metadata } from 'next';
import client from 'tina/__generated__/client';
import PostPageComponent from './PostPageComponent';

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const revalidate = 3600; // invalidate every hour

export async function generateStaticParams() {
  const postsResponse = await client.queries.postConnection();
  const edges = postsResponse.data.postConnection.edges || [];
  const paths = edges
    .map((edge) => {
      return edge?.node?._sys.filename;
    })
    .filter((filename): filename is string => typeof filename === 'string');
  return paths.map((path) => ({
    id: path,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await client.queries.post({ relativePath: `${id}.md` });
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
  const relativePath = `${id}.md`;
  const result = await client.queries.post({ relativePath });

  return <PostPageComponent {...result} />;
}
