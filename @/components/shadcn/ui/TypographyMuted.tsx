import { cn } from '@/lib/utils';

interface TypographyMutedProps {
  children: React.ReactNode;
  className?: string;
}

export default function TypographyMuted({
  children,
  className,
}: TypographyMutedProps) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>
  );
}
