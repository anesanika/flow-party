import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Animtext from "../small/animtext/Animtext";
import Textsvg from "../small/svgs/Textsvg";
import Floating from "../small/floating/Floating";
import Sliderabout from "../small/slideabout/Sliderabout";

const About = () => {
  const ref = useRef(null);
  const simpleRef = useRef(null);
  const bottomRef = useRef(null);

  const inView = useInView(simpleRef, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible"); // Fixed spelling from "visable" to "visible"
    }
  }, [inView]);

  return (
    <div className="bg-[#bfff0a] relative py-20 px-2" ref={ref}>
      <div className="content">
        <div className="w-full flex justify-between">
          <div>
            <Animtext refs={ref} size="18vw" text="What is the" color="black" />
            <Animtext refs={ref} size="18vw" text="Flow party" color="black" />
          </div>
          <div className="translate-y-[200px] max-[1280px]:hidden">
            <Textsvg />
            <Floating
              src="https://assets.website-files.com/63cabfe6113ebc7aed6c0258/63cabfe6113ebcb7ce6c0293_render_02%2520(1)-p-800.png"
              width={250}
              refs={ref}
              top="0"
              right="200px"
            />
          </div>
        </div>
        <div
          className="flex justify-center w-[70%] max-md:w-full"
          ref={simpleRef}
        >
          <motion.p
            className="w-96 font-light text-lg max-md:text-[3vw] text-center max-md:py-10 max-md:mt-10"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }, // Fixed spelling from "visable" to "visible"
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 1 }}
          >
            The Flow Party is a safe, inclusive, and fun space for website
            developers and designers. We are an upbeat community, not for the
            faint of heart. We work hard but always in a Party Mood. Whether
            we&apos;re coding up a storm or taking a break to chat and share
            ideas, we always have a good time.
          </motion.p>
          <div className="max-lg:hidden">
            <Floating
              src="https://assets.website-files.com/63cabfe6113ebc7aed6c0258/63cabfe6113ebcbe876c028c_render_02b%2520(2)-p-800.png"
              width={400}
              refs={ref}
              left="0"
              bottom="30%"
            />
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center py-14 mt-16"
          ref={bottomRef}
        >
          <Sliderabout refs={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default About;
