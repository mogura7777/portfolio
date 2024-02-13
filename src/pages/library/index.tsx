/** @format */

import { MyImage } from "src/components/Atoms/Image";
import Link from "next/link";
export default function Library() {
  return (
    <div>
      <h1 className="ttl">
        Library<span className="ttl__read">ライブラリ</span>
      </h1>
      <div>
        <p className="txt">実装したアプリを掲載していきます。</p>
      </div>
      <ul className="Library__list">
        <li className="Library__list_itme">
          <Link href="./library/pokemon" className="">
            <div className="Library__img">
              <MyImage fname="../img/sample.png" size={300} />
            </div>
            <p className="Library__list_txt">ポケモンジェネレーター</p>
          </Link>
        </li>
        <li className="Library__list_itme">
          <Link href="./library/todo" className="">
            <div className="Library__img">
              <MyImage fname="../img/sample.png" size={300} />
            </div>
            <p className="Library__list_txt">メモアプリ</p>
          </Link>
        </li>
        <li className="Library__list_itme">
          <Link href="./library/chat" className="">
            <div className="Library__img">
              <MyImage fname="../img/sample.png" size={300} />
            </div>
            <p className="Library__list_txt">チャットツール</p>
          </Link>
        </li>
        <li className="Library__list_itme">
          <Link href="./library/gourmet" className="">
            <div className="Library__img">
              <MyImage fname="../img/sample.png" size={300} />
            </div>
            <p className="Library__list_txt">グルメ店検索アプリ</p>
          </Link>
        </li>
        <li className="Library__list_itme">
          <Link href="./library/dog" className="">
            <div className="Library__img">
              <MyImage fname="../img/sample.png" size={300} />
            </div>
            <p className="Library__list_txt">ワンちゃんde癒やし</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
