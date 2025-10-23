'use client';
import { PageQuery } from 'tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import LayoutApp from '@/components/Layout/LayoutApp';

interface PageComponentProps {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function PageComponent(props: PageComponentProps) {
  const { data } = useTina(props);
  const page = data.page;

  // This component only handles PageGeneric template
  // The server component filters to ensure only generic pages reach here
  if (page.__typename !== 'PageGeneric') {
    console.error(`Unexpected page template: ${page.__typename}`);
    return null;
  }

  return (
    <LayoutApp headerText={page.title}>
      <article className="w-full max-w-xl">
        {page.body && <TinaMarkdown content={page.body} />}
      </article>
    </LayoutApp>
  );
}
