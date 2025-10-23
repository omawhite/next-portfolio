import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TypographyH1 from '@/components/shadcn/ui/TypographyH1';
import TypographyP from '@/components/shadcn/ui/TypographyP';
import TypographyMuted from '@/components/shadcn/ui/TypographyMuted';
import LayoutApp from '@/components/Layout/LayoutApp';
import { isVercel } from '@/featureFlags';

export const metadata: Metadata = {
  title: 'Success',
  description: 'Message sent successfully',
};

export default function ContactSuccessPage() {
  if (isVercel) {
    return <div>Coming soon</div>;
  }

  return (
    <LayoutApp hideHeader>
      <TypographyH1>Thanks for reaching out.</TypographyH1>
      <TypographyP>{`I'll get back to you as soon as I can. `}</TypographyP>
      <TypographyMuted>
        <Link href="/">← Back to home</Link>
      </TypographyMuted>
    </LayoutApp>
  );
}
