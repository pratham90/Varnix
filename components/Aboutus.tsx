import React from "react";

const Aboutus = () => {
  return (
    <section
      className="bg-[#1E1E1E] text-white flex flex-col justify-start items-center rounded-2xl sm:rounded-3xl md:rounded-4xl w-full min-h-[50vh] sm:min-h-[60vh] pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-8 animate-fade-in-up"
      aria-label="About Us"
    >
      <div className="bg-zinc-50 flex flex-col sm:flex-row justify-around text-sm sm:text-base md:text-lg items-center text-black w-full max-w-2xl rounded-b-2xl sm:rounded-b-3xl md:rounded-b-4xl py-3 sm:py-4 md:py-3 gap-3 sm:gap-0">
        <div className="flex flex-col justify-center items-center">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold">
            150+
          </span>
          <span className="text-xs sm:text-sm md:text-base">
            project launched
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold">50+</span>
          <span className="text-xs sm:text-sm md:text-base">
            clients covered
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold">97%</span>
          <span className="text-xs sm:text-sm md:text-base">engage rise</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 sm:gap-10 md:gap-20 max-w-7xl py-10  px-4 sm:px-6 md:px-12 lg:px-16 mt-6 sm:mt-8">
        <div className="flex-1 flex flex-col gap-3 sm:gap-4 items-start rounded-2xl w-full">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">
            BRANDS DON'T JUST HAPPEN. WE BUILD THEM
          </h2>
          <p className="text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
            From first impression to lasting impact — we design, scale, and grow
            brands in the digital-first world
          </p>
          <button className="bg-pink-500 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-white text-sm sm:text-base md:text-lg tracking-normal mt-3 sm:mt-4 rounded-full cursor-pointer shadow hover:bg-pink-600 transition">
            View more
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-3 sm:gap-4 text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 w-full">
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-pink-500 flex justify-center items-center rounded-full shrink-0"
              aria-label="Rating icon"
            ></div>
            <span className="font-bold text-lg sm:text-xl md:text-2xl">
              4.9
            </span>
            <span className="text-pink-500 text-lg sm:text-xl ml-1">★</span>
          </div>
          <span className="text-sm sm:text-base">
            average rating from 500+ clients
          </span>
          <p className="text-justify text-sm sm:text-base md:text-lg">
            Varnix is more than a media and marketing agency— we’re a collective
            of strategists, creators, and technologists turning brands into
            cultural forces. In a world driven by attention, we help brands
            capture it, sustain it, and convert it into measurable growth
            through full-spectrum, future-ready solutions. We believe marketing
            is about creating experiences, building communities, and inspiring
            action—not just selling products. We’re not just your agency—we’re
            your extended creative and growth team
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
