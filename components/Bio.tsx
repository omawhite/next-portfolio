import TypographyP from '@/components/shadcn/ui/TypographyP';

const defaultBio = `Hi my name is Omar, I’m a software engineer that specializes in creating great front end experiences, primarily using react. When I’m not engineering I like to game and make music.`;

interface BioProps {
  bio?: string;
}

export default function Bio({ bio = defaultBio }: BioProps) {
  return (
    <section className="max-w-xl">
      <TypographyP>{bio}</TypographyP>
    </section>
  );
}
