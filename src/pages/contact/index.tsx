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
            <form action="https://api.web3forms.com/submit" method="POST">
              {/* <!-- Replace with your Access Key --> */}
              <input
                type="hidden"
                name="access_key"
                value="efc28ee6-267b-4e1b-852e-680f9ce6d9b6"
              ></input>
              <ContactFormInputs />
              {/* <!-- hCaptcha Spam Protection --> */}
              <div className="h-captcha" data-captcha="true"></div>
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
