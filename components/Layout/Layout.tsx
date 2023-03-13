import React, { Fragment, ReactNode, useEffect } from "react";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import $ from "jquery";
interface LayoutProps {
  children: ReactNode;
}
function Layout(props: LayoutProps) {
  const { children } = props;

  useEffect(() => {
    $().ready(() => {
      $("#js-preloader").addClass("loaded");
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <Preloader />
      <main>{children}</main>
      <ContactUs />
      <Footer />
    </Fragment>
  );
}

export default Layout;
