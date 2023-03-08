import Head from "next/head";
import Preloader from "@/components/Preloader/Preloader";
import MainBanner from "@/components/MainBanner/MainBanner";
import Services from "@/components/Services/Services";
import AboutUs from "@/components/AboutUs/AboutUs";
import Courses from "@/components/Courses/Courses";
import Facts from "@/components/Facts/Facts";
import Team from "@/components/Team/Team";
import Testimonials from "@/components/Testimonials/Testimonials";
import Events from "@/components/Events/Events";
import ContactUs from "@/components/ContactUs/ContactUs";
import { useEffect } from "react";

import $ from "jquery";
export default function Home() {
  useEffect(() => {
    $().ready(() => {
      $("#js-preloader").addClass("loaded");
    });

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var box = $('.header-text').height();
      var header = $('header').height();
  
      if (scroll >= box - header) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    })
  }, []);

  

  return (
    <>
      <Head>
        <title>Scholar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Preloader />
      <MainBanner />
      <Services />
      <AboutUs />
      <Courses />
      <Facts />
      <Team />
      <Testimonials />
      <Events />
      <ContactUs />
    </>
  );
}
