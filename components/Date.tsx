import { parseISO, format } from 'date-fns';

interface DateProps {
  dateString: string;
}

export default function DateComponent({ dateString }: DateProps) {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
