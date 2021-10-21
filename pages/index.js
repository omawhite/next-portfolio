import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { generateRSSFeed } from '../lib/feed';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

const bio = `Hi my name is Omar, I’m a software engineer that specializes in creating great front end experiences, primarily using react. When I’m not engineering I like to game and make music.`;

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{bio}</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  // console.dir(allPostsData); //uncomment if you need to debug feed generation
  generateRSSFeed(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}
