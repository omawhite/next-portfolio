import React, { useCallback } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/Layout';

export default function Contact() {
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
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Firstname Lastname"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="yourname@yoursite.com"
            />
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="What do you want to talk about?"
            />
          </div>
          <div>
            <label htmlFor="message">Your message:</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder={`What do you want to say?`}
              spellCheck="true"
            />
          </div>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </section>
    </Layout>
  );
}