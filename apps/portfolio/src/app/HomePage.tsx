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

  return (
    <>
      {data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case 'PageBlocksBio': {
            return (
              <section key={i} className="max-w-xl w-full">
                <TinaMarkdown content={block.text} />
              </section>
            );
          }
        }
      })}
    </>
  );
}
