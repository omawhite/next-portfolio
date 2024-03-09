interface BioProps {
  bio: string;
}

export default function Bio({ bio }: BioProps) {
  return (
    <section className="max-w-xl w-full">
      <div className="postContent" dangerouslySetInnerHTML={{ __html: bio }} />
    </section>
  );
}
