/** @format */

import { useDroppable } from "@dnd-kit/core";
import {
  rectSortingStrategy,
  SortableContext,
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";

export const SortableContainer = ({
  id,
  items,
  label,
}: {
  id: string;
  items: string[];
  label: string;
}) => {
  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <div className="pokemon__box">
      <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
        <h3 className="">{label}</h3>
        <ul
          ref={setNodeRef}
          className="pokemon__list w-full border-2 border-gray-500/75 p-5 mt-2 rounded-md"
        >
          {items.map((id: string, index) => (
            <li key={id} className="pokemon__list_item">
              <SortableItem key={id} id={id} />
            </li>
          ))}
        </ul>
      </SortableContext>
    </div>
  );
};
