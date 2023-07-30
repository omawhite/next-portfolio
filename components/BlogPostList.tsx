import { TypographyH2 } from '@/components/shadcn/ui/TypographyH2';
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
    <section
      className={`${utilStyles.headingMd} ${utilStyles.padding1px} [width:36rem]`}
    >
      <TypographyH2>All Posts</TypographyH2>
      <ul className={'list-none'}>
        {postsData.map(({ id, date, title }) => (
          <BlogPostSnippet key={id} id={id} date={date} title={title} />
        ))}
      </ul>
    </section>
  );
}
