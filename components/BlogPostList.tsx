import utilStyles from '../styles/utils.module.css';
import BlogPostSnippet from './BlogPostSnippet';

interface PostData {
  id: string;
  date: string;
  title: string;
  content?: string;
  description?: string;
}

interface BlogPostsListProps {
  postsData: PostData[];
}

export default function BlogPostsList({ postsData = [] }: BlogPostsListProps) {
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
