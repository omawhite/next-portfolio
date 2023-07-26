import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import profilePic from '../images/profile.jpg';
import Link from 'next/link';
import styles from './Header.module.css';

const name = 'Omar Louis White';

interface HeaderProps {
  home: boolean;
}

export default function Header({ home }: HeaderProps) {
  return (
    <header className={styles.header}>
      {home ? (
        <>
          <Image
            priority
            src={profilePic}
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src={profilePic}
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
        </>
      )}
    </header>
  );
}
