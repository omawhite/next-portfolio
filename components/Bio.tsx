import TypographyP from '@/components/shadcn/ui/TypographyP';

const bio = `Hi my name is Omar, I’m a software engineer that specializes in creating great front end experiences, primarily using react. When I’m not engineering I like to game and make music.`;

export default function Bio() {
  return (
    <section className="max-w-xl">
      <TypographyP>{bio}</TypographyP>
    </section>
  );
}
