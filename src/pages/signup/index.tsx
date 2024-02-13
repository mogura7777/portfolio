/** @format */

import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Spacer,
  useToast,
  Link,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
import { FirebaseError } from "@firebase/util";
export const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);
      setEmail("");
      setPassword("");
      toast({
        title: "確認メールを送信しました。",
        status: "success",
        position: "top",
      });
    } catch (e) {
      toast({
        title: "エラーが発生しました。",
        status: "error",
        position: "top",
      });
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Container py={14}>
        <Heading>新規アカウント作成</Heading>
        <chakra.form onSubmit={handleSubmit}>
          <Spacer height={8} aria-hidden />
          <Grid gap={4}>
            <Box display={"contents"}>
              <FormControl>
                <FormLabel>メールアドレス</FormLabel>
                <Input
                  type={"email"}
                  name={"email"}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>パスワード</FormLabel>
                <Input
                  type={"password"}
                  name={"password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </FormControl>
            </Box>
          </Grid>
          <Spacer height={4} aria-hidden />
          <Center>
            {/* <Button type={"submit"} isLoading={isLoading}>
              <Navigate href={(path) => path.signup.$url()}>
                <Link lineHeight={1}>アカウントを作成</Link>
              </Navigate>
            </Button> */}
            <Button type={"submit"} isLoading={isLoading}>
              新規登録
            </Button>
          </Center>
        </chakra.form>
      </Container>
    </div>
  );
};

export default Page;
