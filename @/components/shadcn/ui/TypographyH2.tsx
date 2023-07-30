import { cn } from '@/lib/utils';

interface TypographyH2Props {
  children: React.ReactNode;
  withBorder?: boolean;
  className?: string;
}

export function TypographyH2({
  children,
  withBorder = false,
  className,
}: TypographyH2Props) {
  const baseStyles =
    'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0';
  return (
    <h2
      className={cn(baseStyles, withBorder ? 'border-b' : undefined, className)}
    >
      {children}
    </h2>
  );
}
