/** @format */

import type { ReactNode } from "react";
import type { UrlObject } from "url";
import Link from "next/link";
import { pagesPath, PagesPath } from "src/lib/$path";

type Props = {
  href: UrlObject | ((path: PagesPath) => UrlObject);
  children: ReactNode;
};

export const Navigate = ({ href, children }: Props) => {
  return (
    <Link href={typeof href === "function" ? href(pagesPath) : href} passHref>
      {children}
    </Link>
  );
};
