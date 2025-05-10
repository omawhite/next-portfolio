import Link from 'next/link';
import DateComponent from './Date';
import utilStyles from '@/styles/utils.module.css';

interface BlogPostSnippetProps {
  id: string;
  date: string;
  title: string;
}

export default function BlogPostSnippet({
  id,
  date,
  title,
}: BlogPostSnippetProps) {
  return (
    <li className={utilStyles.listItem} key={id}>
      <Link href={`/posts/${id}`}>{title}</Link>
      <br />
      <small className={utilStyles.lightText}>
        <DateComponent dateString={date} />
      </small>
    </li>
  );
}
