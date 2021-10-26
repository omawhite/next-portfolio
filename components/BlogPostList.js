import Link from 'next/link';
import Date from '../components/Date';
import utilStyles from '../styles/utils.module.css';
import BlogPostSnippet from './BlogPostSnippet';

export default function BlogPostsList({ postsData = [] }) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {postsData.map(({ id, date, title }) => (
          <BlogPostSnippet key={id} id={id} date={date} title={title} />
        ))}
      </ul>
    </section>
  );
}
