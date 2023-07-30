import TypographyH1 from '@/components/shadcn/ui/TypographyH1';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/shadcn/ui/avatar';
import { siteTitle } from '@/constants';
import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
  shouldAvatarLinkToHome?: boolean;
  hideHeader?: boolean;
  headerText?: string;
  documentTitle?: string;
}

export default function Layout({
  children,
  shouldAvatarLinkToHome,
  headerText = siteTitle,
  hideHeader = false,
  documentTitle,
}: LayoutProps) {
  const title = documentTitle ? `${documentTitle} - ${siteTitle}` : siteTitle;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="p-6 flex flex-col items-center">
        {shouldAvatarLinkToHome ? (
          <>
            <Link href="/">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/images/profile.jpg" />
                <AvatarFallback>OLW</AvatarFallback>
              </Avatar>
            </Link>
          </>
        ) : (
          <>
            <Avatar className="w-36 h-36">
              <AvatarImage src="/images/profile.jpg" />
              <AvatarFallback>OLW</AvatarFallback>
            </Avatar>
          </>
        )}
        {!hideHeader && <TypographyH1>{headerText}</TypographyH1>}
      </header>
      <main className="p-6 flex flex-col content-center items-center">
        {children}
      </main>
    </>
  );
}
