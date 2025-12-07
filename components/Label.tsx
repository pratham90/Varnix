import React from 'react'

const Label = () => {
  return (
   <div className="relative overflow-hidden w-full my-2 sm:my-3 md:my-4">
        <div className="flex animate-marquee whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-bold tracking-tight text-gray-300 ">
          <span className="mx-10">*Design</span>
          <span className="mx-10">*Marketing</span>
          <span className="mx-10">*Content</span>
          <span className="mx-10">*Design</span>
          <span className="mx-10">*Marketing</span>
          <span className="mx-10">*Content</span>

          {/* Duplicate */}
          <span className="mx-10">*Design</span>
          <span className="mx-10">*Marketing</span>
          <span className="mx-10">*Content</span>
          <span className="mx-10">*Design</span>
          <span className="mx-10">*Marketing</span>
          <span className="mx-10">*Content</span>
        </div>

        <style>{`
            .animate-marquee {
              animation: marquee 10s linear infinite;
            }
            .relative:hover .animate-marquee {
              animation-play-state: paused;
            }
            @keyframes marquee {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
      </div>
  )
}

export default Label
