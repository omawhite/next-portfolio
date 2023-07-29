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
      <div>stuff goes here</div>
    </>
  );
}
