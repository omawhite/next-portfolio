import { NextPage } from 'next';
import Link from 'next/link';
import { isContactPageEnabled } from '../../featureFlags';
import TypographyH1 from '../../components/shadcn/TypographyH1';
import TypographyP from '../../components/shadcn/TypographyP';
import TypographyMuted from '../../components/shadcn/TypographyMuted';

const Success: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center p-12">
      <TypographyH1>Thanks for reaching out.</TypographyH1>
      <TypographyP>{`I'll get back to you as soon as I can. `}</TypographyP>
      <TypographyMuted>
        <Link href="/">← Back to home</Link>
      </TypographyMuted>
    </main>
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
