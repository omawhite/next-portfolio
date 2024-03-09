import React from 'react';
import Layout from '@/components/Layout/LayoutNew';
import { Button } from '@/components/shadcn/ui/button';
import { isVercel } from '@/featureFlags';
import ContactFormInputs from '@/components/ContactFormInputs';

export default function Contact() {
  return (
    <Layout headerText="Contact me" documentTitle="Contact">
      <section className="flex flex-col justify-center max-w-xl [width:36rem]">
        <>
          {isVercel ? (
            <div>Coming soon</div>
          ) : (
            <form
              name="contact"
              autoComplete="on"
              method="POST"
              action="/contact/success"
              data-netlify="true"
              className="flex flex-col gap-3"
            >
              <ContactFormInputs />
              <Button type="submit" className="self-start">
                Send
              </Button>
            </form>
          )}
        </>
      </section>
    </Layout>
  );
}
