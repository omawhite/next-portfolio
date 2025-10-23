import { format, parseJSON } from 'date-fns';

interface DateProps {
  dateString: string;
}

export default function DateComponent({ dateString }: DateProps) {
  const date = parseJSON(dateString);
  const formattedDateString = format(date, 'LLLL d, yyyy');
  return <time dateTime={dateString}>{formattedDateString}</time>;
}
