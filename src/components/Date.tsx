import { format, parseJSON } from 'date-fns';

interface DateProps {
  dateString: string;
}

export default function DateComponent({ dateString }: DateProps) {
  const date = parseJSON(dateString);
  return (
    <time dateTime={dateString}>{format(date, 'LLLL d, yyyy - h:m a')}</time>
  );
}
