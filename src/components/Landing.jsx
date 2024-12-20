import { motion, scroll } from "framer-motion";
import { Power4 } from "gsap/all";
import React from "react";

const Landing = () => {
  return (
    <div className="relative w-full h-[150vh] sm:h-[250vh]">
      <div className="picture w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt="Landing Background"
        />
      </div>

      <div className="w-full absolute top-0">
        <div className="text text-white h-full mx-auto px-5 sm:px-10">
          {/* Paragraph Section */}
          <div className="para sm:mt-[30rem] mt-72">
            {[
              "brands and businesses that",
              "create exceptional & nice",
              "experiences where people",
              "live, work, unwind.",
            ].map((item, index) => (
              <p
                className="text-md overflow-hidden masker sm:text-3xl"
                key={index}
              >
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </p>
            ))}
          </div>

          {/* Headings Section */}
          <div className="headings sm:mt-10 mt-5">
            {["Digital", "Design", "Experience"].map((item, index) => (
              <motion.h1
                className="text-6xl sm:text-[14rem] overflow-hidden font-normal tracking-tighter leading-none"
                key={index}
                initial={{ rotate: 90, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.8,
                  delay: index * 0.15,
                }}
              >
                {item}
              </motion.h1>
            ))}
          </div>

          {/* Description Section */}
          <div className="para2 sm:text-lg sm:w-1/3 mt-10 sm:mt-20">
            <p>
              We help experience-driven companies thrive <br /> by making their
              audience feel the refined <br /> intricacies of their brand and
              product in the <br /> digital space. Unforgettable journeys start{" "}
              <br /> with a click.
            </p>
            <a
              className="border-b-[.3px] sm:border-b-[1px] sm:text-xl mt-4 inline-block border-zinc-100 pb-1"
              href="https://www.exoape.com/studio"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
