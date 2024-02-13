/** @format */

import "src/styles/globals.scss";
import "swiper/css/bundle";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import NextNprogress from "nextjs-progressbar";
import { initializeFirebaseApp } from "src/libs/firebase/firebase";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "src/feature/auth/provider/AuthProvider";
import { LayoutMain } from "src/components/LayoutMain";
import { Layout } from "src/components/Layout";
initializeFirebaseApp();
export default function App({ Component, pageProps }: AppProps) {
  switch (pageProps.layout) {
    case "main": {
      return (
        <ChakraProvider>
          <AuthProvider>
            <ThemeProvider attribute="class">
              <NextNprogress
                color="#fff"
                startPosition={0.3}
                stopDelayMs={200}
                height={2}
                showOnShallow={true}
              />

              <LayoutMain toc={pageProps.table}>
                <Component {...pageProps} />
              </LayoutMain>
            </ThemeProvider>
          </AuthProvider>
        </ChakraProvider>
      );
    }
    default: {
      return (
        <ChakraProvider>
          <AuthProvider>
            <ThemeProvider attribute="class">
              <NextNprogress
                color="#fff"
                startPosition={0.3}
                stopDelayMs={200}
                height={2}
                showOnShallow={true}
              />

              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </AuthProvider>
        </ChakraProvider>
      );
    }
  }
}
