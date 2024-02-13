/** @format */

import Head from "next/head";
import { BreadCrumb } from "./Molecules/BreadCrumb";
import { Header } from "src/components/Organism/Header";
import { SpMenu } from "src/components/Organism/SpMenu";
import { Footer } from "src/components/Organism/Footer";
import Toc from "src/components/Molecules/Toc";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  title?: string;
  toc: any;
};

export const LayoutMain = ({ children, title = "" }: Props) => {
  return (
    <div className="body">
      <Head>
        <title>{title}</title>
      </Head>
      <Header></Header>

      <SpMenu></SpMenu>
      <div className="body__box02">
        <aside className="body__side">
          <div className="body__side_in">
            <Toc></Toc>
          </div>
        </aside>
        <main className="body__main02">
          <BreadCrumb></BreadCrumb> {children}
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};
