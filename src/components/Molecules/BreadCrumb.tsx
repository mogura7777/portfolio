/** @format */

import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export const BreadCrumb: NextPage = () => {
  const router = useRouter();

  // pathを「/」で分解
  const paths = decodeURI(router.asPath).substring(1).split("/");

  // リンク先アドレスの取得
  const roots = [""];
  for (let i = 0; i < paths.length; i++) roots.push(roots[i] + "/" + paths[i]);

  return (
    <>
      {router.asPath.length === 1 ? null : (
        <div className="breadcrumb">
          <ol className="breadcrumb__list">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            {paths.map((x, i) => (
              <li key={i}>
                <Link href={roots[i + 1]} key={i}>
                  {x}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
};
