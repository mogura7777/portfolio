/** @format */

import { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { Discretion } from "src/components/Molecules/Discretion";
import styles from "src/styles/Library.module.scss";
interface IndexPageProps {
  data: HotpepperResponseType;
}
interface ShopObj {
  id: string;
  name: string;
  station_name: string;
  genre: {
    name: string;
    catch: string;
  };
}

interface HotpepperResponseType {
  results: {
    results_available: Number;
    results_start: Number;
    shop: ShopObj[];
  };
}
const defaultEndpoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.GOURMET_API_KEY}&format=json&large_area=Z023`;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
const IndexPage: NextPage<IndexPageProps> = (props: IndexPageProps) => {
  const [linkList, setLinkList] = useState([
    "https://qiita.com/dtakkiy/items/490a2a2ead301474edc6",
  ]);
  const [text, setText] = useState(
    "ホットペッパーWebサービスを利用して、グルメ店検索アプリを実装しました"
  );
  const {
    results_available = 0,
    results_start = 1,
    shop: defaultShops = [],
  } = props.data.results;

  //取得した店舗データを格納
  const [shop, updateShops] = useState(defaultShops);

  //取得したページデータを格納
  const [page, updatePage] = useState({
    results_available: results_available,
    results_start: results_start,
  });
  // キーワードを格納
  const [keyword, setKeyword] = useState("");
  // 開始位置の変更を監視
  useEffect(() => {
    if (keyword === "") return;

    const params = { keyword: keyword };
    const query = new URLSearchParams(params);

    // リクエスト、レスポンスの取得
    const request = async () => {
      const res = await fetch(`/api/search?${query}`);
      const data = await res.json();
      const nextData = data.results;

      updatePage({
        results_available: nextData.results_available,
        results_start: nextData.results_start,
      });

      updateShops(nextData.shop);
    };

    request();
  }, [keyword]);

  // もっと読むボタンを押したときの処理
  // const handlerOnClickReadMore = () => {
  //   if (page.results_returned <= page.results_start) return

  //   updatePage((prev) => {
  //     return {
  //       ...prev,
  //       results_start: prev.results_start + 1,
  //     }
  //   })
  // }
  // 検索ボタン押下時の処理
  // const handlerOnSubmitSearch = (e) => {
  //   e.preventDefault();

  //   const { currentTarget = {} } = e;
  //   const fields = Array.from(currentTarget?.elements);
  //   const fieldQuery = fields.find((field) => field.name === "query");

  //   // keywordをセット
  //   const value = fieldQuery.value || "";
  //   console.log("🚀  value", value);
  //   setKeyword(value);
  // };

  return (
    <div>
      <h1 className="ttl">
        Library<span className="ttl__read">ライブラリ</span>
      </h1>
      <div className="">
        <h2 className="sttl02">グルメ店検索アプリ</h2>
        {/* <form onSubmit={handlerOnSubmitSearch} className="text-center">
          <input
            type="search"
            name="query"
            className="rounded py-2 px-4 text-left border-red-500"
            placeholder="キーワードを入力して下さい"
          />
          <button className="ml-2 text-white bg-red-500 rounded py-2 px-6 hover:opacity-75">
            Search
          </button>
        </form> */}
        <ul className={styles.list}>
          {props.data.results.shop.map((shopData, index) => {
            return (
              <li key={index}>
                <div key={shopData.id} className={styles.shopData}>
                  <p>
                    <span className={styles.shopDataTitle}>掲載店名:</span>
                    <br />
                    {shopData.name}
                  </p>
                  <p>
                    <span className={styles.shopDataTitle}>最寄駅名:</span>
                    <br />
                    {shopData.station_name}
                  </p>
                  <p>
                    <span className={styles.shopDataTitle}>お店ジャンル:</span>
                    <br />
                    {shopData.genre.name}
                  </p>
                  <p>
                    <span className={styles.shopDataTitle}>
                      お店ジャンルキャッチ:
                    </span>
                    <br />
                    {shopData.genre.catch}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <Discretion text={text} linkList={linkList}></Discretion>
    </div>
  );
};

export default IndexPage;
