import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/Layout/LayoutNew';
import { isContactPageEnabled } from '../../featureFlags';
import { Label } from '@/components/shadcn/ui/label';
import { Input } from '@/components/shadcn/ui/input';
import { Textarea } from '@/components/shadcn/ui/textarea';
import { Button } from '@/components/shadcn/ui/button';

export default function Contact() {
  return (
    <Layout headerText="Contact me">
      <Head>
        <title>{`contact - ${siteTitle}`}</title>
      </Head>
      <section className="flex flex-col justify-center max-w-xl [width:36rem]">
        <form
          name="contact"
          autoComplete="on"
          method="POST"
          action="/contact/success"
          data-netlify="true"
          className="flex flex-col gap-3"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <Label htmlFor="name" className="label">
              Name:
            </Label>
            <Input
              className="input"
              type="text"
              name="name"
              id="name"
              required
              placeholder="Firstname Lastname"
            />
          </div>
          <div>
            <Label htmlFor="email" className="label">
              Email:
            </Label>
            <Input
              className="input"
              type="email"
              name="email"
              id="email"
              required
              placeholder="yourname@yoursite.com"
            />
          </div>
          <div>
            <Label htmlFor="subject" className="label">
              Subject:
            </Label>
            <Input
              className="input"
              type="text"
              name="subject"
              id="subject"
              placeholder="What do you want to talk about?"
            />
          </div>
          <div>
            <Label htmlFor="message" className="label">
              Your message:
            </Label>
            <Textarea
              className="textarea"
              id="message"
              name="message"
              required
              placeholder={`What do you want to say?`}
              spellCheck="true"
            />
          </div>
          <Button type="submit" className="self-start">
            Send
          </Button>
        </form>
      </section>
    </Layout>
  );
}

export const getServerSideProps = () => {
  if (isContactPageEnabled) {
    return {
      props: {},
    };
  }
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};
