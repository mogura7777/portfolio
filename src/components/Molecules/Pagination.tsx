/** @format */

import Link from "next/link";
import { PER_PAGE } from "src/libs/fields";
type Props = {
  totalCount: number;
};
export const Pagination = ({ totalCount }: Props) => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="Pagination">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/blog/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  );
};
