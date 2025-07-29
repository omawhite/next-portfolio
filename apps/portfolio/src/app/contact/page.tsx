import React from 'react';
import type { Metadata } from 'next';
import LayoutApp from '@/components/Layout/LayoutApp';
import { Button } from '@/components/shadcn/ui/button';
import { isVercel } from '@/featureFlags';
import ContactFormInputs from '@/components/ContactFormInputs';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me',
};

export default function ContactPage() {
  return (
    <LayoutApp headerText="Contact me">
      <section className="flex flex-col justify-center w-full max-w-xl">
        {isVercel ? (
          <form action="https://api.web3forms.com/submit" method="POST">
            {/* <!-- Replace with your Access Key --> */}
            <input
              type="hidden"
              name="access_key"
              value="efc28ee6-267b-4e1b-852e-680f9ce6d9b6"
            />
            <ContactFormInputs />
            {/* <!-- hCaptcha Spam Protection --> */}
            <div className="h-captcha" data-captcha="true" />
            <Button type="submit" className="self-start mt-4">
              Send
            </Button>
          </form>
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
            <Button type="submit" className="self-start mt-4">
              Send
            </Button>
          </form>
        )}
      </section>
    </LayoutApp>
  );
}
