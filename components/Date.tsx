import { parseISO, format } from 'date-fns';

interface DateProps {
  dateString: string;
}

export default function DateComponent({ dateString }: DateProps) {
  console.log('dateString:', dateString);
  const date = parseISO(dateString);
  console.log(date);

  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
