import Link from 'next/link';
import Date from '../components/Date';
import utilStyles from '../styles/utils.module.css';

export default function BlogPostSnippet({ id, date, title, content }) {
  return (
    <li className={utilStyles.listItem} key={id}>
      <Link href={`/posts/${id}`}>
        <a>{title}</a>
      </Link>
      <br />
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
      <p>{content}</p>
    </li>
  );
}
