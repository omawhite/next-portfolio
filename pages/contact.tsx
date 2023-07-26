import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{`contact - ${siteTitle}`}</title>
      </Head>
      <section>
        <h1>Contact</h1>
      </section>
    </Layout>
  );
}
