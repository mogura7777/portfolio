/** @format */

import { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  UniqueIdentifier,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { SortableContainer } from "src/components/model/dndKit/SortableContainer";
import { Item } from "src/components/model/dndKit/Item";
import { Discretion } from "src/components/Molecules/Discretion";
import styles from "src/styles/Library.module.scss";
interface IndexPageProps {
  id: number;
  name: string;
  front_image: string;
}
const fetchPokemon = async () => {
  const index = Math.floor(Math.random() * 905 + 1);
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + index);
  const result = await res.json();
  return result;
};
export const getServerSideProps: GetServerSideProps = async () => {
  const pokemon = await fetchPokemon();
  return {
    props: {
      id: pokemon["id"],
      name: pokemon["name"],
      front_image: pokemon["sprites"]["front_default"],
    },
  };
};
const IndexPage: NextPage<IndexPageProps> = (props: IndexPageProps) => {
  const [linkList, setLinkList] = useState([
    "https://github.com/clauderic/dnd-kit",
    "https://zenn.dev/t4ich1/articles/539615ca2d69be",
  ]);
  const [text, setText] = useState(
    "モンスタボールを投げて、メンバーを増やせます。ドラッグ＆ドロップでメンバーを入れ替え。"
  );
  const [pokemonListMain, setPokemonListMain] = useState([
    {
      id: props.id,
      name: props.name,
      image: props.front_image,
    },
  ]);
  const [items, setItems] = useState<{
    [key: string]: string[];
  }>({
    container1: [
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    ],
    container2: [
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    ],
  });

  // ドラッグ&ドロップでソート可能なリスト
  const handleClick = async () => {
    const pokemon = await fetchPokemon();
    setPokemonListMain([
      ...pokemonListMain,
      {
        id: pokemon["id"],
        name: pokemon["name"],
        image: pokemon["sprites"]["front_default"],
      },
    ]);
    items.container1.push(pokemon["sprites"]["front_default"]);
  };

  //DragOverlay用のid
  const [activeId, setActiveId] = useState<UniqueIdentifier>();

  // ドラッグの開始、移動、終了などにどのような入力を許可するかを決めるprops
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  //各コンテナ取得関数
  const findContainer = (id: UniqueIdentifier) => {
    if (id in items) {
      return id;
    }
    return Object.keys(items).find((key: string) =>
      items[key].includes(id.toString())
    );
  };

  // ドラッグ開始時に発火する関数
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    //ドラッグしたリソースのid
    const id = active.id.toString();
    setActiveId(id);
  };

  //ドラッグ可能なアイテムがドロップ可能なコンテナの上に移動時に発火する関数
  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    //ドラッグしたリソースのid
    const id = active.id.toString();
    //ドロップした場所にあったリソースのid
    const overId = over?.id;

    if (!overId) return;

    // ドラッグ、ドロップ時のコンテナ取得
    const activeContainer = findContainer(id);
    const overContainer = findContainer(over?.id);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((prev) => {
      // 移動元のコンテナの要素配列を取得
      const activeItems = prev[activeContainer];
      // 移動先のコンテナの要素配列を取得
      const overItems = prev[overContainer];

      // 配列のインデックス取得
      const activeIndex = activeItems.indexOf(id);
      const overIndex = overItems.indexOf(overId.toString());

      let newIndex;
      if (overId in prev) {
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem = over && overIndex === overItems.length - 1;
        const modifier = isBelowLastItem ? 1 : 0;
        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item !== active.id),
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length),
        ],
      };
    });
  };

  // ドラッグ終了時に発火する関数
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    //ドラッグしたリソースのid
    const id = active.id.toString();
    //ドロップした場所にあったリソースのid
    const overId = over?.id;

    if (!overId) return;

    // ドラッグ、ドロップ時のコンテナ取得
    const activeContainer = findContainer(id);
    const overContainer = findContainer(over?.id);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    // 配列のインデックス取得
    const activeIndex = items[activeContainer].indexOf(id);
    const overIndex = items[overContainer].indexOf(overId.toString());

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(
          items[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }
    setActiveId(undefined);
  };
  return (
    <div title="Pokemon">
      <h1 className="ttl">
        Library<span className="ttl__read">ライブラリ</span>
      </h1>
      <div className="pokemon__body">
        <h2 className="sttl02">ポケモンアプリ</h2>
        <label className="pokemon__btn_wrap">
          <button className="pokemon__btn" onClick={handleClick}></button>
          モンスタボールを投げる
        </label>
        <div className="pokemon__body_in">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
          >
            <SortableContainer
              id="container1"
              items={items.container1}
              label="選抜メンバー"
            />

            <SortableContainer
              id="container2"
              items={items.container2}
              label="控えメンバー"
            />
            <DragOverlay>
              {activeId ? <Item id={activeId} /> : null}
            </DragOverlay>
          </DndContext>
        </div>
      </div>

      <Discretion text={text} linkList={linkList}></Discretion>
    </div>
  );
};

export default IndexPage;
