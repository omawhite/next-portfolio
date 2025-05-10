import { cn } from '@/lib/utils';

interface TypographyPProps {
  children: React.ReactNode;
  className?: string;
}

export default function TypographyP({ children, className }: TypographyPProps) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
      {children}
    </p>
  );
}
