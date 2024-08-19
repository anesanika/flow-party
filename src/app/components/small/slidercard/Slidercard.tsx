import React from "react";
import style from "./Slidercard.module.css";
import Image from "next/image";

interface SliderCardProps {
  title: string;
  name: string;
  date: string;
  category: string;
  image: string;
  bg: string;
}

const Slidercard = ({
  title,
  name,
  date,
  category,
  image,
  bg,
}: SliderCardProps) => {
  return (
    <div
      className={`${style.cardCont} flex flex-col justify-between w-[38.33333%] h-[700px] max-md:h-[500px] relative`} // Added relative positioning for the Image component
      style={{ backgroundColor: bg }}
    >
      <div className="flex w-full justify-between p-2 px-4 z-20">
        <div className="uppercase text-white">
          <h3 className="font-extralight mb-3">{name}</h3>
          <h2>{date}</h2>
        </div>
        <div className="relative">
          <div className="border border-dashed h-8 p-2 pt-1 rounded-full text-white overflow-hidden mix-blend-difference">
            <a
              href="#"
              className={`${style.cardCatgCont} uppercase flex flex-col overflow-hidden font-extralight`}
            >
              <span>{category}</span>
              <span>{category}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full">
        {" "}
        {/* Added relative positioning */}
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={title}
        />
      </div>
      <div className="w-full flex justify-between items-end text-white px-3 py-5 z-20">
        <h1 className="uppercase font-[humanBold] text-[5rem] leading-[0.8] max-w-[40%] max-md:text-[10vw]">
          {title}
        </h1>

        <div
          className={`${style.bottomArrow} w-[70px] overflow-hidden text-[3rem] flex flex-col items-center h-[70px]`}
        >
          <span>🡥</span>
          <span>🡥</span>
        </div>
      </div>
    </div>
  );
};

export default Slidercard;
