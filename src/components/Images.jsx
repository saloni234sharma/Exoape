import React, { useRef, useEffect } from "react";
import gsap, { ScrollTrigger } from "gsap/all";

const Images = () => {
  const parentRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    timeline
      .fromTo(
        firstRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 2 }
      )
      .fromTo(
        secondRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 2 },
        "-=1.5"
      )
      .fromTo(
        thirdRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 2 },
        "-=1.5"
      )
      .fromTo(
        fourthRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 2 },
        "-=1.5"
      );
  }, []);

  return (
    <div
      ref={parentRef}
      className="w-full sm:h-[100vh] h-[70vh] overflow-hidden flex items-center justify-center bg-white"
    >
      <div className="w-[40%] sm:w-[20%] sm:h-[70%] relative h-1/2">
        <div
          ref={firstRef}
          className="w-20 sm:w-48 sm:h-[15rem] h-[8rem] absolute object-cover top-6 -right-1/3"
        >
          <img
            className="h-full w-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt="First Image"
          />
        </div>
        <div
          ref={secondRef}
          className="w-[8rem] sm:w-[16rem] aspect-video -left-1/2 sm:-left-2/3 overflow-hidden absolute top-1/3"
        >
          <video
            autoPlay
            muted
            loop
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div
          ref={thirdRef}
          className="w-[9rem] sm:w-[20rem] aspect-video -left-[70%] -bottom-16 absolute"
        >
          <img
            src="https://via.placeholder.com/300"
            alt="Third Image"
            className="h-full w-full object-cover"
          />
        </div>
        <div
          ref={fourthRef}
          className="w-[8rem] sm:w-[10rem] sm:-right-[30%] sm:-bottom-[10%] bg-black aspect-[1.5/1] -right-[70%] absolute -bottom-[37%]"
        >
          <video
            autoPlay
            muted
            loop
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
            className="w-full h-full"
          ></video>
        </div>

        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt="Background Image"
        />
      </div>
    </div>
  );
};

export default Images;
