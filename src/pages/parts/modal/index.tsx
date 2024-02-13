/** @format */
import { Modal } from "src/components/Modal/Modal";
import { useState } from "react";
export default function Books() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <h1 className="ttl">
        Parts<span className="ttl__read">パーツ</span>
      </h1>
      <div className="Parts__body">
        <button onClick={() => setIsOpen(true)}>モーダルを開く</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </Modal>
      </div>
    </div>
  );
}
