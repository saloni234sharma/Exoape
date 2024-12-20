import React from "react";
import star from "../assets/star.webp";

const Spread = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="mx-auto max-w-screen-2xl bg-red px-5 sm:px-10">
        <div className="flex justify-center items-center">
          <img className="w-10" src={star} alt="" />
          <h3>in the media</h3>
        </div>
        <div className="mt-10 text-center">
          <h1 className="text-6xl sm:text-9xl tracking-tighter">Spread</h1>
          <h1 className="text-6xl sm:text-9xl tracking-tighter"> the news</h1>
          <p className="w-2/3 mx-auto sm:text-xl  sm:w-1/3 mt-6 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ullam aliquam necessitatibus quisquam?</p>
          <a  className="font-semibold mt-5 border-b-2 pb-1 inline-block border-black " href="#">Browse all news</a>
        </div>
       
      </div>
    </div>
  );
};

export default Spread;
