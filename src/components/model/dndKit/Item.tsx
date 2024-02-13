/** @format */

import { UniqueIdentifier } from "@dnd-kit/core";
import { MyImage } from "src/components/Atoms/Image";
export const Item = ({ id }: { id: UniqueIdentifier }) => {
  return (
    <div className="zoom_img w-full h-[50px] flex items-center justify-center my-2.5">
      <MyImage fulname={String(id)} />
    </div>
  );
};
