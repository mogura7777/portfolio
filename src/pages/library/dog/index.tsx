/** @format */

import React, { useState, useRef } from "react";
import { MyImage } from "src/components/Atoms/Image";
import { GetServerSideProps, NextPage } from "next";
import { Discretion } from "src/components/Molecules/Discretion";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import styles from "src/styles/Library.module.scss";

type Params = {
  initialCatImageUrl: string;
};

const searchDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const res = await response.json();
  return res;
};

export const getServerSideProps = async () => {
  const res = await searchDog();
  return {
    props: {
      initialCatImageUrl: res.message,
    },
  };
};

export default function Home({ initialCatImageUrl }: Params) {
  const [linkList, setLinkList] = useState([
    "https://zenn.dev/kiriyama/articles/f82696bb37c651",
    "https://www.npmjs.com/package/react-cropper",
  ]);
  const [text, setText] = useState("ワンちゃんの画像を見て癒やされるページ");
  const [catImage, setCatImage] = useState(initialCatImageUrl);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState<Cropper>();
  const imageRef = useRef<HTMLImageElement>(null);
  const handleClick = async () => {
    const res = await searchDog();
    setCatImage(res.message);
  };
  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <div>
      <h1 className="ttl">
        Library<span className="ttl__read">ライブラリ</span>
      </h1>
      <div className={styles.body}>
        <h2 className="sttl02">ワンちゃんde癒やし</h2>
        <div className={styles.container}>
          <div className={styles.btn_box}>
            <button className="btn" onClick={handleClick}>
              次のワンちゃん
            </button>
            <button className="btn" onClick={getCropData}>
              トリミング
            </button>
          </div>
          <Cropper
            style={{ height: 300, width: "100%", margin: "0 0 40px" }}
            initialAspectRatio={1}
            preview="#preview"
            src={catImage}
            ref={imageRef}
            viewMode={1}
            guides={true}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            checkOrientation={false}
            onInitialized={(instance) => {
              setCropper(instance);
            }}
          />
          <div className={styles.box}>
            <div className={styles.boxin}>
              <h2 className="sttl">Preview</h2>
              <div id="preview" className={`${styles.preview}`} />
            </div>
            <div className={styles.boxin}>
              <h2 className="sttl">Crop</h2>
              <div className={`${styles.preview}`}>
                {cropData !== "#" ? (
                  <img
                    className={styles.preview__img}
                    src={cropData}
                    alt="cropped"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Discretion text={text} linkList={linkList}></Discretion>
    </div>
  );
}
