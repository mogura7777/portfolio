/** @format */

import React from "react";
import Link from "next/link";
type Props = {
  text?: string | number;
  linkList: string[];
};
export const Discretion = (props: Props) => {
  return (
    <dl className="discretion">
      <div className="discretion__box">
        <dt className="discretion__ttl">説明</dt>
        <dd className="discretion__txt">{props.text}</dd>
      </div>
      <div className="discretion__box">
        <dt className="discretion__ttl">参考</dt>
        <dd className="discretion__txt discretion__link_wrap">
          {props.linkList.map((id: string, index) => (
            <Link
              key={id}
              target="_blank"
              className="discretion__link"
              href={id}
            >
              {id}
            </Link>
          ))}
        </dd>
      </div>
    </dl>
  );
};
