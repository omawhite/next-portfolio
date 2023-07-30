import TypographyH1 from '@/components/shadcn/ui/TypographyH1';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/shadcn/ui/avatar';
import Link from 'next/link';

export const siteTitle = `Omar Louis White`;

interface LayoutProps {
  children: React.ReactNode;
  shouldAvatarLinkToHome?: boolean;
}

export default function Layout({
  children,
  shouldAvatarLinkToHome,
}: LayoutProps) {
  return (
    <>
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
            <TypographyH1>{siteTitle}</TypographyH1>
          </>
        )}
      </header>
      <main className="p-6 flex flex-col content-center items-center">
        {children}
      </main>
    </>
  );
}
