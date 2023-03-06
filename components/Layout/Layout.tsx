import React, { Fragment, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface LayoutProps {
  children: ReactNode;
}
function Layout(props: LayoutProps) {
  const { children } = props;
  return <Fragment>
    <Header/>
    <main>
        {children}
    </main>
    <Footer />
  </Fragment>;
}

export default Layout;
