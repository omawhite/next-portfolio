import TypographyH1 from '@/components/shadcn/ui/TypographyH1';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/shadcn/ui/avatar';
import { siteTitle } from 'src/constants';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../Navbar';

interface LayoutProps {
  children: React.ReactNode;
  shouldAvatarLinkToHome?: boolean;
  hideHeaderText?: boolean;
  hideHeader?: boolean;
  headerText?: string;
  documentTitle?: string;
}

export default function Layout({
  children,
  shouldAvatarLinkToHome,
  headerText = siteTitle,
  hideHeaderText = false,
  hideHeader = false,
  documentTitle,
}: LayoutProps) {
  const title = documentTitle ? `${documentTitle} - ${siteTitle}` : siteTitle;
  const navbarLinks = [
    { label: 'Home', href: '/', key: 'home' },
    { label: 'Blog', href: '/blog', key: 'blog' },
    { label: 'Contact', href: '/contact', key: 'contact' },
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar links={navbarLinks} />
      {!hideHeader && (
        <header className="p-6 flex flex-col items-center">
          {shouldAvatarLinkToHome ? (
            <>
              <Link href="/">
                <Avatar className="w-32 h-32">
                  <AvatarImage
                    src="/images/profile.jpg"
                    alt="A picture of me, Omar White"
                  />
                  <AvatarFallback>OLW</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <>
              <Avatar className="w-36 h-36">
                <AvatarImage
                  src="/images/profile.jpg"
                  alt="A picture of me, Omar White"
                />
                <AvatarFallback>OLW</AvatarFallback>
              </Avatar>
            </>
          )}
          {!hideHeaderText && <TypographyH1>{headerText}</TypographyH1>}
        </header>
      )}
      <main className="p-6 flex flex-col content-center items-center">
        {children}
      </main>
    </>
  );
}
