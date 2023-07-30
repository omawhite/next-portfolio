import { NextPage } from 'next';
import Link from 'next/link';
import TypographyH1 from '@/components/shadcn/ui/TypographyH1';
import TypographyP from '@/components/shadcn/ui/TypographyP';
import TypographyMuted from '@/components/shadcn/ui/TypographyMuted';
import Layout from 'components/Layout/LayoutNew';

const Success: NextPage = () => {
  return (
    <Layout documentTitle="Success" hideHeader>
      <TypographyH1>Thanks for reaching out.</TypographyH1>
      <TypographyP>{`I'll get back to you as soon as I can. `}</TypographyP>
      <TypographyMuted>
        <Link href="/">← Back to home</Link>
      </TypographyMuted>
    </Layout>
  );
};

export default Success;
