'use client';
import { PageQuery } from 'tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface HomePageProps {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function HomePageComponent(props: HomePageProps) {
  const { data } = useTina(props);
  const page = data.page;

  // HomePage only handles the PageHome template
  if (page.__typename !== 'PageHome') {
    console.warn('HomePage component received non-home template');
    return null;
  }

  return (
    <>
      {page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case 'PageHomeBlocksBio': {
            return (
              <section key={i} className="w-full max-w-xl">
                <TinaMarkdown content={block.text} />
              </section>
            );
          }
          default:
            return null;
        }
      })}
    </>
  );
}
