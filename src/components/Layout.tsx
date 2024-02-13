/** @format */

import Head from "next/head";
import { ReactNode } from "react";
import { BreadCrumb } from "src/components/Molecules/BreadCrumb";
import { Header } from "src/components/Organism/Header";
import { SpMenu } from "src/components/Organism/SpMenu";
import { Footer } from "src/components/Organism/Footer";
type Props = {
  children: ReactNode;
  title?: string;
};

export const Layout = ({ children, title = "" }: Props) => {
  return (
    <div className="body">
      <Head>
        <title>{title}</title>
      </Head>
      <Header></Header>
      <SpMenu></SpMenu>
      <div className="body__box">
        <main className="body__main">
          {" "}
          <BreadCrumb></BreadCrumb>
          {children}
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};
