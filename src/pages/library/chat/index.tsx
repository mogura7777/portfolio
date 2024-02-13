/** @format */

import {
  Avatar,
  Box,
  Button,
  chakra,
  Flex,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { getDatabase, onChildAdded, push, ref } from "@firebase/database";
import { FirebaseError } from "@firebase/util";
import { Discretion } from "src/components/Molecules/Discretion";
import styles from "src/styles/Library.module.scss";
type MessageProps = {
  message: string;
};

const Message = ({ message }: MessageProps) => {
  return (
    <Flex alignItems={"start"}>
      <Avatar />
      <Box ml={2}>
        <Text bgColor={"gray.200"} rounded={"md"} px={2} py={1}>
          {message}
        </Text>
      </Box>
    </Flex>
  );
};
export const Page = () => {
  const messagesElementRef = useRef<HTMLDivElement | null>(null);
  const [linkList, setLinkList] = useState([
    "https://github.com/clauderic/dnd-kit",
    "https://zenn.dev/t4ich1/articles/539615ca2d69be",
  ]);
  const [text, setText] = useState("firebaseを利用してチャットを実装");
  const [message, setMessage] = useState<string>("");
  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const db = getDatabase();
      const dbRef = ref(db, "chat");
      await push(dbRef, {
        message,
      });
      setMessage("");
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    }
  };
  const [chats, setChats] = useState<{ message: string }[]>([]);

  useEffect(() => {
    try {
      const db = getDatabase();
      const dbRef = ref(db, "chat");
      return onChildAdded(dbRef, (snapshot) => {
        const message = String(snapshot.val()["message"] ?? "");
        setChats((prev) => [...prev, { message }]);
      });
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.error(e);
      }
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    messagesElementRef.current?.scrollTo({
      top: messagesElementRef.current.scrollHeight,
    });
  }, [chats]);
  return (
    <div title="chat">
      <h1 className="ttl">
        Library<span className="ttl__read">ライブラリ</span>
      </h1>
      <h2 className="sttl02">チャットアプリ</h2>
      <p>右上のボタンよりログイン後にチャットを利用できます。</p>

      <Flex
        flexDirection={"column"}
        overflowY={"auto"}
        gap={2}
        ref={messagesElementRef}
      >
        {chats.map((chat, index) => (
          <Message message={chat.message} key={`ChatMessage_${index}`} />
        ))}
      </Flex>
      <Spacer height={2} aria-hidden />
      <chakra.form display={"flex"} gap={2} onSubmit={handleSendMessage}>
        <Input value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button type={"submit"}>送信</Button>
      </chakra.form>
      <Discretion text={text} linkList={linkList}></Discretion>
    </div>
  );
};

export default Page;