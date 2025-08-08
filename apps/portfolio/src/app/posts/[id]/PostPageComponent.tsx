'use client';
import React from 'react';
import { PostQuery } from 'tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import LayoutApp from '@/components/Layout/LayoutApp';
import DateComponent from '@/components/Date';
import Link from 'next/link';
import TypographyH1 from '@/components/shadcn/ui/TypographyH1';
import TypographyMuted from '@/components/shadcn/ui/TypographyMuted';

interface PostPageComponentProps {
  data: PostQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function PostPageComponent(props: PostPageComponentProps) {
  const { data } = useTina(props);
  const postData = data.post;

  return (
    <LayoutApp shouldAvatarLinkToHome={true} hideHeaderText={true}>
      <article className="max-w-xl">
        <TypographyH1 className="mb-4">{postData.title}</TypographyH1>
        <TypographyMuted>
          <DateComponent dateString={postData.date} />
        </TypographyMuted>
        <div className="postContent">
          <TinaMarkdown content={postData.body} />
        </div>
        <div className="self-start mt-12">
          <Link href="/blog"> ← Back to blog</Link>
        </div>
      </article>
    </LayoutApp>
  );
}
