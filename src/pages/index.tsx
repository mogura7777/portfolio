/** @format */

import type { NextPage } from "next";
import { useState } from "react";
import { MyImage } from "src/components/Atoms/Image";
import { Carousel } from "src/components/Molecules/Carousel";
import dynamic from "next/dynamic";
const ScrollRevealContainer = dynamic(
  () => import("src/components/Molecules/ScrollRevealContainer"),
  { ssr: false }
);
const Home: NextPage = () => {
  const [linkList] = useState([
    "./img/006.jpg",
    "./img/002.jpg",
    "./img/003.jpg",
    "./img/004.jpg",
    "./img/001.png",
    "./img/005.jpg",
  ]);
  return (
    <div>
      <div className="About__body">
        <h1 className="About__body_sttl">ポートフォリオサイトにつきまして</h1>
        <p className="About__body_txt">
          Next.js、TypeScriptを使用して作成しています。
          <br />
          今後は、技術ブログとして活用する予定です。
        </p>
      </div>
      <h1 className="ttl">
        Profile<span className="ttl__read">プロフィール</span>
      </h1>
      <ScrollRevealContainer move="left">
        <div className="Profile__body">
          <div className="Profile__img">
            <MyImage fname="../img/001.png" size={400} />
          </div>
          <div>
            <h2>Masashi</h2>
            <p className="txt">フロントエンドを担当。</p>
            <p className="txt">
              休日はジムでウォーキングしながら読書しています。
              <br />
              午後は娘と公園で遊んで、銭湯に行くのがお決まりのコースです。
            </p>
          </div>
        </div>
      </ScrollRevealContainer>

      <h1 className="ttl">
        History<span className="ttl__read">これまでの経歴</span>
      </h1>
      <ScrollRevealContainer move="left">
        <div className="History__body">
          <ul className="timeline">
            <li className="timeline__box">
              <p className="timeline-date">幼少期</p>
              <div className="timeline-content">
                <h3>田舎の自然に囲まれて育ちました。</h3>
                <p>山や川で昆虫や魚を探索。</p>
              </div>
            </li>
            <li>
              <p className="timeline-date">小学生時代</p>
              <div className="timeline-content">
                <h3>兄の影響で地元の野球チームに入部。</h3>
                <p>
                  小学校の高学年でジャッキー・チェンに憧れて、体操教室に通い始める。
                </p>
              </div>
            </li>
            <li>
              <p className="timeline-date">中学生時代</p>
              <div className="timeline-content">
                <p>
                  野球に入部。
                  <br />
                  体育大学あがりの監督に精神と肉体を鍛えられる。
                  <br />
                  <br />
                  引退試合後は、陸上部の助っ人として入部。
                  <br />
                  夏休みは、毎日10キロほど山道を走り込みの日々。
                </p>
              </div>
            </li>
            <li>
              <p className="timeline-date">高校生時代</p>
              <div className="timeline-content">
                <h3>友人の誘いでバドミントンに入部。</h3>
                <p>
                  中学校の野球の猛練習の経験が活かされ、団体メンバーに選ばれて県大会に出場。
                  <br />
                  <br />
                  美術部の先生に影響を受けて美大を目指すことに。
                  <br />
                  高校2年の終わり頃に画塾に通い出す。
                </p>
              </div>
            </li>
            <li>
              <p className="timeline-date">大学生時代</p>
              <div className="timeline-content">
                <p>
                  美術大学でイラスト科を専攻。
                  <br />
                  主にアナログのイラストを描いていました。
                  <br />
                  <br />
                  生活費を稼ぐためバイトの日々。
                  <br />
                  ブレイクダンスをはじめる。卒業目前にしてウィンドミルを習得。
                </p>
                <p>
                  無事、大学卒業するも就活をしなかったため、近所のCDショップでアルバイト。
                  <br />
                  お客さんが来ないので朝から晩までポップ作成の日々。
                </p>
              </div>
            </li>
            <li>
              <p className="timeline-date">職業訓練校</p>
              <div className="timeline-content">
                <p>ホームページの基礎を学ぶ。</p>
              </div>
            </li>
            <li>
              <p className="timeline-date">社会人</p>
              <div className="timeline-content">
                <h3>WEB制作会社に就職。</h3>
                <p>
                  コーディングやCMSの構築、アクセス解析、デレクションなどの業務を経験。
                  <br />
                </p>
              </div>
            </li>
            <li>
              <p className="timeline-date">現在</p>
              <div className="timeline-content">
                <h3>自社開発アプリケーションのUI設計/フロントエンドを担当。</h3>
                <p className="txt02">
                  今後は、バックエンドの知識も広げて行く予定です。
                </p>
              </div>
            </li>
          </ul>
        </div>
      </ScrollRevealContainer>

      <h1 className="ttl">
        Skill<span className="ttl__read">保有している資格</span>
      </h1>

      <div className="Skill__body">
        <ScrollRevealContainer move="left">
          <ul className="list">
            <li>HTML5プロフェッショナル認定試験 レベル1 取得</li>
            <li>HTML5プロフェッショナル認定試験 レベル2 取得</li>
          </ul>
        </ScrollRevealContainer>
      </div>
    </div>
  );
};

export default Home;
