interface TypographyPProps {
  children: React.ReactNode;
}

export default function TypographyP({ children }: TypographyPProps) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}
