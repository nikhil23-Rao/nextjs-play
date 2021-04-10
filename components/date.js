import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} style={{ fontWeight: "bold" }}>
      "{format(date, "LLLL d, yyyy")}"
    </time>
  );
}
