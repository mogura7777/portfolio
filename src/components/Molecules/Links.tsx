/** @format */

import { NextPage } from "next";
import Link from "next/link";

export const Links: NextPage = () => {
  return (
    <>
      <Link
        href="/"
        className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
      >
        Home
      </Link>
      <Link
        href="/blog"
        className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
      >
        Blog
      </Link>

      <Link
        href="/library"
        className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
      >
        Library
      </Link>
      {/* <Link
        href="/parts"
        className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
      >
        Parts
      </Link> */}
      <Link
        href="/books"
        className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
      >
        Books
      </Link>
      <Link
        href="/work"
        className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
      >
        Work
      </Link>
      <Link
        href="/contact"
        className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
      >
        Contact
      </Link>
    </>
  );
};
