import { NextPage } from 'next';
import Link from 'next/link';
import { isContactPageEnabled } from '../../featureFlags';

const Success: NextPage = () => {
  return (
    <div>
      <h1>Form submitted successfully!</h1>
      <p>{`Thank you for reaching out. I'll get back to you as soon as I can. `}</p>
      <div>
        <Link href="/">← Back to home</Link>
      </div>
    </div>
  );
};

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

export default Success;
