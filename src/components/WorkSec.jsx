import React, { useState } from "react";
import star from "../assets/star.webp";
import { motion } from "framer-motion";

const WorkSec = () => {
  const [elems, setElems] = useState([
    {
      heading: "Pixelflakes",
      subheading: "Architectural Marketing Agency",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Rinno and Pelle",
      subheading: "Effortless chic lifestyle",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1100x1370/filters:quality(90)",
    },
    {
      heading: "Abelle Interiors",
      subheading: "laxurious design experience",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Columbia picture",
      subheading: "celebrating a century of cinema",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)",
    },
  ]);
  return (
    <div className="w-full py-20 relative">
      <div className="max-w-screen-2xl mx-auto  px-5 sm:px-10 ">
        <div className="featured flex gap-3 items-center">
          <img className="w-[60px]" src={star} alt="" />
          <h3 className="font-semibold">Featured Projects</h3>
        </div>
        <h1 className="text-7xl overflow-hidden sm:text-[13rem] sm:leading-none sm:tracking-tighter mt-4">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 0.8,
            }}
            className="inline-block origin-left"
          >
            Work
          </motion.span>
        </h1>
        <p className=" mt-5 text-md leading-2 font-semibold">
          Highlights that we Passionately, lovingly <br /> built with forword
          thinking clients <br /> and friendly over the years
        </p>
        <div className="elems sm:gap-8 sm:flex sm:flex-wrap mt-10">
          {elems.map((item, index) => {
            return (
              <div className="elem sm:w-[48%] mt-10 w-full">
                <div className="video relative w-full overflow-hidden sm:h-[50vw] h-[104vw]">
                  <motion.img
                  initial={{opacity:1}}
                  whileHover={{opacity:0}}
                    data-scroll
                    data-scroll-speed="-.6"
                    className="w-full sm:absolute sm:z-[2] sm:top-0 sm:left-0 hidden sm:block h-full object-cover "
                    src={item.image}
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full block scale-[1.3] h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src={item.video}
                  ></video>
                </div>
                <div className="mt-5">
                  <h3 className="font-semibold">PixelFlakes</h3>
                  <h3 className="capitalize opacity-40">
                    Architectural Marketing Agency
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkSec;
