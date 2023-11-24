import Script from 'next/script';
import Head from 'next/head';

const AdminPage = () => {
  return (
    <>
      <Head>
        <title>Content Manager</title>
      </Head>
      <>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        <Script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js" />
      </>
    </>
  );
};

export default AdminPage;
