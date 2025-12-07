import React from 'react'

const Label = () => {
  return (
   <div className="relative overflow-hidden w-full my-4">
        <div className="flex animate-marquee whitespace-nowrap text-9xl font-bold tracking-tight text-gray-300 ">
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
