import "@/styles/globals.css";
import "@/styles/flex-slider.css";
import "@/styles/fontawesome.css";
import "@/styles/owl.css";
import "@/styles/templatemo-scholar.css";
import "@/public/vendor/bootstrap/css/bootstrap.min.css";
import { Fragment } from "react";
import Script from "next/script";
import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
        integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
        crossOrigin="anonymous"
      />
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
