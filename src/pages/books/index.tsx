/** @format */
import { Modal } from "src/components/Modal/Modal";
import { useState } from "react";
import { MyImage } from "src/components/Atoms/Image";
import { client } from "src/libs/client";
import type { Book } from "src/models/blog";
type Props = {
  books: Book[];
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "book" });
  return {
    props: {
      books: data.contents,
    },
  };
};
export default function Parts({ books }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("");
  const onOpenDialog = (name: string) => {
    setSelectedItem(name);
  };

  const onCloseDialog = () => {
    setSelectedItem("");
  };
  return (
    <div>
      <h1 className="ttl">
        Books<span className="ttl__read">ブック</span>
      </h1>
      <p className="txt">おすすめの書籍を掲載していきます。</p>
      <ul className="Books__list clearfix">
        {books.map((book) => (
          <li key={book.id}>
            <div className="Books__img" onClick={() => onOpenDialog(book.id)}>
              <MyImage fulname={book.image?.url} size={140} />
            </div>
            <Modal
              isOpen={book.id === selectedItem}
              onClose={() => onCloseDialog()}
            >
              <div className="Books__box">
                <p className="Books__box_txt">{book.body}</p>
                <button
                  className="Books__btn btn"
                  onClick={() => onCloseDialog()}
                >
                  <span>閉じる</span>
                </button>
              </div>
            </Modal>
            <button className="Books__btn" onClick={() => setIsOpen(true)}>
              <span className="Books__btn_ttl">{book.title}</span>
              <span className="Books__btn_txt">{book.author}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
