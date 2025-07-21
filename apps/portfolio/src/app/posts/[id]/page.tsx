import React from 'react';
import type { Metadata } from 'next';
import LayoutApp from '@/components/Layout/LayoutApp';
import { getAllPostIds, getPostData } from '@/lib/posts';
import DateComponent from '@/components/Date';
import Link from 'next/link';
import TypographyH1 from '@/components/shadcn/ui/TypographyH1';
import TypographyMuted from '@/components/shadcn/ui/TypographyMuted';
import { cn } from '@/lib/utils';

interface PostPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    id: path.params.id,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const postData = await getPostData(params.id);

  return {
    title: postData.title,
    description: 'Blog post',
    openGraph: {
      title: postData.title,
      description: 'Blog post',
      type: 'article',
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const postData = await getPostData(params.id);

  return (
    <LayoutApp shouldAvatarLinkToHome={true} hideHeaderText={true}>
      <article className="max-w-xl">
        <TypographyH1 className="mb-4">{postData.title}</TypographyH1>
        <TypographyMuted>
          <DateComponent dateString={postData.date} />
        </TypographyMuted>
        <div
          className={cn('postContent')}
          // biome-ignore lint/security/noDangerouslySetInnerHtml: just trust me bro
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <div className="self-start mt-12">
          <Link href="/blog"> ← Back to blog</Link>
        </div>
      </article>
    </LayoutApp>
  );
}
