/** @format */
import Link from "next/link";
import { MyImage } from "src/components/Atoms/Image";
// export const getStaticProps = async () => {
//   return {
//     props: {
//       layout: "main",
//     },
//   };
// };
export default function Parts() {
  return (
    <div>
      <h1 className="ttl">
        Parts<span className="ttl__read">パーツ</span>
      </h1>
      <p className="txt">パーツ集を掲載していきます。</p>
      <ul className="Parts__list">
        <li className="Parts__list_itme">
          <Link href="./parts/modal/" className="">
            <p className="Parts__list_txt">モーダル</p>
          </Link>
        </li>
        <li className="Parts__list_itme">
          <Link href="./parts/modal/" className="">
            <p className="Parts__list_txt">タブ</p>
          </Link>
        </li>
        <li className="Parts__list_itme">
          <Link href="./parts/modal/" className="">
            <p className="Parts__list_txt">テキスト</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
