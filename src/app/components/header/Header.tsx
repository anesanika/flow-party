import React from "react";
import Head from "../small/head/Head";
import Linesvg from "../small/svgs/Linesvg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className="w-full h-screen min-h-[70ch] flex items-center justify-center bg-[#5647ff] relative">
      <div className="absolute w-full h-[85vh]">
        <Head />
        <div
          className={`${style.svgHheadCont} absolute w-full flex`}
          style={{ zIndex: 1 }}
        >
          <Linesvg />
          <Linesvg />
        </div>
      </div>
      <div className="z-10 flex flex-col items-center">
        <h1
          className={`${style.headerText} text-[55rem] leading-[0] text-white font-[human] mt-[100px]`}
        >
          FLOW
        </h1>
        <p
          className={`${style.headerBottomText} absolute bottom-[70px] w-full max-w-[500px] text-[1.3rem] text-white text-center leading-6`}
        >
          The Flow Party is a{" "}
          <span className="font-[boni] text-[1.7rem]">safe</span> , inclusive,
          and fun space for website developers and{" "}
          <span className="font-[boni] text-[1.7rem]">designers</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
