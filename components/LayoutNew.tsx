import Head from 'next/head';
import styles from './Layout.module.css';
import Link from 'next/link';
import Header from './Header';

export const siteTitle = `Omar's blog`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="px-6">This will be a header</header>
      <main className="px-6">{children}</main>
    </>
  );
}
