import React, { useCallback } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/Layout';

export default function Contact() {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
    // const form = e.currentTarget;
    // fetch('/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: new URLSearchParams(new FormData(form)).toString(),
    // })
    //   .then(() => alert('Success!'))
    //   .catch((error) => alert(error));
  }, []);
  return (
    <Layout>
      <Head>
        <title>{`contact - ${siteTitle}`}</title>
      </Head>
      <section className="flex flex-col justify-center p-6">
        <h1 className="text-xl">Contact</h1>
        <form
          name="contact"
          autoComplete="on"
          method="POST"
          action="/contact/success"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit"> Send </button>
        </form>
      </section>
    </Layout>
  );
}
