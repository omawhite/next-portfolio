import React from 'react';
import type { Metadata } from 'next';
import client from 'tina/__generated__/client';
import PageComponent from './PageComponent';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 3600; // invalidate every hour

export async function generateStaticParams() {
  // Get all pages from the content/pages directory
  const pagesResponse = await client.queries.pageConnection();
  const edges = pagesResponse.data.pageConnection.edges || [];

  // Filter for pages with generic template only
  const paths = edges
    .filter((edge) => edge?.node?.__typename === 'PageGeneric')
    .map((edge) => edge?.node?._sys.filename)
    .filter((filename): filename is string => typeof filename === 'string');

  return paths.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const page = await client.queries.page({ relativePath: `${slug}.md` });
    const pageData = page.data.page;

    return {
      title: pageData.title,
      description: pageData.description || `Page: ${pageData.title}`,
    };
  } catch (error) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const relativePath = `${slug}.md`;
  const result = await client.queries.page({ relativePath });

  if (!result.data.page) {
    notFound();
  }

  return <PageComponent {...result} />;
}
