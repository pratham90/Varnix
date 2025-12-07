import React from 'react'

const PageLabel = ({title}: {title: string}) => {
  return (
   <div className="relative overflow-hidden w-full ">
        <div className="flex animate-marquee whitespace-nowrap text-9xl font-bold tracking-tight text-black ">
          <span className="mx-10">{title}</span>
          <span className="mx-10">{title}</span>
          <span className="mx-10">{title}</span>
          <span className="mx-10">{title}</span>
          <span className="mx-10">{title}</span>
          <span className="mx-10">{title}</span>
          

          {/* Duplicate */}
         <span className="mx-10">{title}</span>
         <span className="mx-10">{title}</span>
         <span className="mx-10">{title}</span>
         <span className="mx-10">{title}</span>
         <span className="mx-10">{title}</span>
         <span className="mx-10">{title}</span>
     
        </div>

        <style>{`
            .animate-marquee {
              animation: marquee 9s linear infinite;
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

export default PageLabel
