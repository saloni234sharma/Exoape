import React, { useEffect } from "react";
import star from "../assets/star.webp";
import { useRef } from "react";
import gsap, { Power4, ScrollTrigger } from "gsap/all";

const Playreel = () => {
  const parent = useRef(null);
  const vediodiv = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(vediodiv.current, {
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: 1,
      },
      width: "100%",
      height: "100%",
      ease: Power4,
    });
  });
  return (
    <div
      ref={parent}
      className="w-full relative text-white h-screen bg-black  overflow-hidden"
    >
      <div
        ref={vediodiv}
        className="w-40 sm:w-96 overflow-hidden aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <video
          autoPlay
          muted
          loop
          className="w-full scale-[2.5] h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="https://player.vimeo.com/progressive_redirect/playback/724832427/rendition/1080p/file.mp4?loc=external&log_user=0&signature=0ed44a0255edf7f44c0925e951a269426f3f4eb5a6c46f83df7da03d07e795aa"
        ></video>
      </div>
      <div className="overlay absolute w-full  px-5 sm:px-10 py-20 h-full flex flex-col justify-between">
        <div className=" w-full   flex items-center justify-center gap-3">
          <img
            className="w-[30px]"
            src="https://www.freeiconspng.com/thumbs/white-star-icon/white-star-icon-2.png"
            alt=""
          />{" "}
          <h3 className="text-sm">Work in motion</h3>
        </div>
        <h1 className="w-full flex items-center justify-center sm:gap-96 gap-32">
          <div className="text-4xl sm:text-8xl  font-light">Play</div>
          <div className="text-4xl sm:text-8xl font-light">Reel</div>
        </h1>
        <p className="text-center text-sm">
          our work is best experience in motion, don't forget to put on your
          headphones
        </p>
      </div>
    </div>
  );
};

export default Playreel;
