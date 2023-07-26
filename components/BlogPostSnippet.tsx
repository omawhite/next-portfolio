import Link from 'next/link';
import Date from './Date';
import utilStyles from '../styles/utils.module.css';

interface BlogPostSnippetProps {
  id: string;
  date: string;
  title: string;
  content: string;
}

export default function BlogPostSnippet({
  id,
  date,
  title,
  content,
}: BlogPostSnippetProps) {
  return (
    <li className={utilStyles.listItem} key={id}>
      <Link href={`/posts/${id}`}>
        <a>{title}</a>
      </Link>
      <br />
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
    </li>
  );
}
