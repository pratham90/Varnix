
import React from "react";

const Aboutus = () => {
  return (
    <section className="bg-[#1E1E1E] text-white flex flex-col justify-start items-center rounded-4xl w-full min-h-[60vh] pb-10 px-2 sm:px-8" aria-label="About Us">
      <div className="bg-zinc-50 flex flex-col sm:flex-row justify-around text-base sm:text-lg items-center text-black w-full max-w-2xl rounded-b-4xl py-2 sm:py-0">
        <div className="flex flex-col justify-center items-center mb-2 sm:mb-0">
          <span className="text-2xl sm:text-3xl font-bold">150+</span>
          <span>project launched</span>
        </div>
        <div className="flex flex-col justify-center items-center mb-2 sm:mb-0">
          <span className="text-2xl sm:text-3xl font-bold">50+</span>
          <span>clients covered</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-2xl sm:text-3xl font-bold">97%</span>
          <span>engage rise</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-start gap-15 w-full max-w-5xl px-4 md:px-16 mt-8">
        <div className="flex-1 flex flex-col gap-4 items-start rounded-2xl">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">About us</h2>
          <p className="text-left text-3xl md:text-4xl font-light leading-tight">more than 8 years experience in digital marketing. specialist in growth strategy.</p>
          <button className="bg-pink-500 px-6 py-2 text-white text-lg tracking-normal mt-4 rounded-full cursor-pointer shadow hover:bg-pink-600 transition">View more</button>
        </div>
        <div className="flex-1 flex flex-col gap-4 text-lg md:text-2xl mt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-500 flex justify-center items-center rounded-full" aria-label="Rating icon"></div>
            <span className="font-bold">4.9</span>
            <span className="text-pink-500 text-xl ml-1">★</span>
          </div>
          <span className="text-base">average rating from 500+ clients</span>
          <p className="text-justify text-base md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veniam non perspiciatis laboriosam error porro totam voluptates tempore, expedita provident.</p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
