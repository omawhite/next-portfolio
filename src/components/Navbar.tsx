import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/shadcn/ui/navigation-menu';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ColorModeToggle from './ColorModeToggle';

function NavBarLink({ href, label, ...props }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link href={href} passHref legacyBehavior>
      <NavigationMenuLink className="NavigationMenuLink" active={isActive}>
        {label}
      </NavigationMenuLink>
    </Link>
  );
}

interface NavbarLinkValue {
  key: string;
  label: string;
  href: string;
}
interface NavbarProps {
  links: NavbarLinkValue[];
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <div className="flex flex-row justify-between items-baselin md:flex">
      <nav className="space-x-8 self-center flex flex-row items-center">
        {links.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.label}
          </Link>
        ))}
      </nav>
      <ColorModeToggle />
    </div>
  );
}
