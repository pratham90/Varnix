'use client'
import React from 'react'
import Navbar from "@/components/Navbar"
import Label from "@/components/Label"
import Footer from "@/components/Footer"
import PageLabel from '@/components/PageLabel'
import Aboutus from '@/components/Aboutus'

const page = () => {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white">
      <Navbar />
      <PageLabel title="about us." />
      
     
      <section className="w-full bg-pink-50 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto  rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 xl:p-16">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
           
            <div className="shrink-0 md:w-2/5">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="text-gray-500 block">Who</span>
                <span className="text-black block">we are.</span>
              </h2>
            </div>
            
            
            <div className="flex-1 space-y-4 md:space-y-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla ornare eget felis rhoncus ornare, mauris sed ante a augue faucibus.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla ornare eget felis rhoncus ornare, mauris sed ante a augue faucibus.
              </p>
            </div>
          </div>
        </div>
      </section>
<Aboutus />

    
      <section className="w-full relative bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-20 lg:py-24 min-h-[85vh]">
        <div className="max-w-7xl mx-auto relative h-full">
      
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start mb-20 md:mb-32">
            <div className="shrink-0 md:w-2/5">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="text-gray-400 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-1">Our</span>
                <span className="text-black inline-block relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                  Mission
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-pink-500"></span>
                </span>
              </h2>
            </div>
            
            <div className="flex-1 space-y-5 md:space-y-6 pt-2">
              <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

         
         
        </div>
      </section>

      <Label />
      <Footer />
    </main>
  )
}

export default page
