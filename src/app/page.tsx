"use client";
import Mian from "./components/mian/Mian";
import Header from "./components/header/Header";
import Sectionscroll from "./components/small/scrollsection/Sectionscroll";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "./components/footer/Footer";
import Loading from "./components/small/loading/Loading";
import Head from "next/head";

export default function Home() {
  const myRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: myRef,
    offset: ["start start", "end end"],
  });
  const sectionHidde = {
    scale: useTransform(scrollYProgress, [0, 1], [1, 0.8]),
    rotate: useTransform(scrollYProgress, [0, 1], [0, 10]),
  };
  const sectionViseble = {
    scale: useTransform(scrollYProgress, [0, 1], [0.7, 1]),
    rotate: useTransform(scrollYProgress, [0, 1], [10, 0]),
  };

  return (
    <>
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Loading />
      <div ref={myRef} className="relative h-[200vh]">
        <Sectionscroll scale={sectionHidde.scale} rotate={sectionHidde.rotate}>
          <Header />
        </Sectionscroll>
        <div className="overflow-x-hidden">
          <Sectionscroll
            scale={sectionViseble.scale}
            rotate={sectionViseble.rotate}
          >
            <Mian />
          </Sectionscroll>
        </div>
        <Sectionscroll>
          <Footer />
        </Sectionscroll>
      </div>
    </>
  );
}
