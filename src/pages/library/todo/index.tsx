/** @format */

import dynamic from "next/dynamic";
const TodoApp = dynamic(() => import("./index"), {
  //サーバーサイド側でインポートはしない
  ssr: false,
});
export default function Contact() {
  return <TodoApp />;
}
