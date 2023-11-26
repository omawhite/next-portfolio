import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/shadcn/ui/navigation-menu';
import { useRouter } from 'next/router';
import Link from 'next/link';

function NavBarLink({ href, ...props }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link href={href} passHref legacyBehavior>
      <NavigationMenuLink className="NavigationMenuLink" active={isActive} />
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
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>Test</NavigationMenuItem>
        {links.map((link) => (
          <NavigationMenuItem key={link.key}>
            <NavBarLink href={link.href}>{link.label}</NavBarLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>Dark mode toggle here</NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
