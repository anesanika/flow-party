import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useSpring } from "framer-motion";
import "swiper/css";
import Animtext from "../animtext/Animtext";
import Slidercard from "../slidercard/Slidercard";

const Events = () => {
  const ref = useRef(null);
  const [isMouseHover, setMouseHover] = useState<boolean>(false);

  const mouseX = useSpring(0, { stiffness: 600, damping: 80, mass: 0.5 });
  const mouseY = useSpring(0, { stiffness: 600, damping: 80, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouseHover(true);
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleMouseLeave = () => {
    setMouseHover(false);
  };

  return (
    <div className="w-full py-30 px-10">
      {/* events header */}
      <div className="w-full flex justify-between items-center" ref={ref}>
        <Animtext refs={ref} text="events" size="15vw" />
        <p className="text-white text-[1.4rem] max-w-[15%] min-w-60 text-end font-extralight max-md:text-[3vw]">
          Our virtual events feature the{" "}
          <span className="font-[boni]">top talent</span> in the design &
          development
          <span className="font-[boni]"> space</span>.
        </p>
      </div>

      <div
        className="w-full overflow-hidden my-20 cursor-grab active:cursor-grabbing"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          slidesPerView={3.4}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 320px
            220: {
              slidesPerView: 1, // 1.2 slides visible
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1, // 2.2 slides visible
            },

            600: {
              slidesPerView: 1.3, // 2.2 slides visible
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2, // 3.4 slides visible
            },

            1300: {
              slidesPerView: 3, // 4.4 slides visible
            },
            // when window width is >= 1024px
            1400: {
              slidesPerView: 3.4, // 4.4 slides visible
            },
          }}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <Slidercard
              image="https://assets.website-files.com/63cabfe6113ebc7aed6c0258/63cabfe6113ebc8fc86c02a1_devin-fountain-profile-p-800.jpg"
              title="friendback cafe"
              date="24 jan 23"
              category="desing"
              name="devin fountain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slidercard
              image="https://assets.website-files.com/63cabfe6113ebc7aed6c0258/63cabfe6113ebc510b6c0287_event-002.png"
              title="build smarter In webflow"
              date="27 jan 23"
              category="build"
              name="gridup.io library"
              bg="#ff7bca"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slidercard
              image="https://assets.website-files.com/63cabfe6113ebc7aed6c0258/63cabfe6113ebc51386c02ad_Gerardo-p-800.jpg"
              title="positive thinking"
              date="10 feb 23"
              category="motivation"
              name="gerardo mendez"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slidercard
              image="https://assets.website-files.com/63cabfe6113ebc7aed6c0258/63cabfe6113ebc20456c0278_event-004-p-800.png"
              title="Front End Development"
              date="tba"
              category="build"
              name="victor work"
              bg="#bfff0a"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <motion.div
        className="fixed p-4 top-0 left-0 z-[10000] bg-white pointer-events-none rounded-full"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={
          isMouseHover ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }
        }
        style={{
          y: mouseY,
          x: mouseX,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <h1 className="uppercase font-light opacity-75 pointer-events-none">
          <span className="mr-2">◀</span>
          drag
          <span className="ml-2">▶</span>
        </h1>
      </motion.div>
    </div>
  );
};

export default Events;
