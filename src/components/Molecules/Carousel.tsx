/** @format */

import Image from "next/image";
import { MyImage } from "src/components/Atoms/Image";
import { Swiper, SwiperSlide } from "swiper/react"; //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation } from "swiper"; //使いたい機能をインポート

SwiperCore.use([Pagination, Navigation]);

type Props = {
  linkList: string[];
};

export const Carousel = (props: Props) => {
  return (
    <Swiper
      slidesPerView="auto"
      breakpoints={{
        600: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      loop={true}
    >
      {props.linkList.map((src: string, index: number) => {
        return (
          <SwiperSlide key={`${index}`}>
            <MyImage className={"slide-img"} fname={src} size={300} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
