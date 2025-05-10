import utilStyles from '@/styles/utils.module.css';
import BlogPostSnippet from '@/components/BlogPostSnippet';

interface PostData {
  id: string;
  date: string;
  title: string;
  content?: string;
  description?: string;
}

interface RecentPostsProps {
  postsData: PostData[];
}

export default function RecentPosts({ postsData = [] }: RecentPostsProps) {
  return (
    <section
      className={`${utilStyles.headingMd} ${utilStyles.padding1px} w-full max-w-xl`}
    >
      <h2 className={utilStyles.headingLg}>Recent Posts</h2>
      <ul className={utilStyles.list}>
        {postsData.map(({ id, date, title }) => (
          <BlogPostSnippet key={id} id={id} date={date} title={title} />
        ))}
      </ul>
    </section>
  );
}
