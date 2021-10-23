import utilStyles from '../styles/utils.module.css';

const bio = `Hi my name is Omar, I’m a software engineer that specializes in creating great front end experiences, primarily using react. When I’m not engineering I like to game and make music.`;

export default function BioBlurb() {
  return (
    <section className={utilStyles.headingMd}>
      <p>{bio}</p>
    </section>
  );
}
