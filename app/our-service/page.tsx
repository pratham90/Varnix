'use client'
import React from 'react'
import Navbar from "@/components/Navbar"
import Label from "@/components/Label"
import Footer from "@/components/Footer"
import PageLabel from '@/components/PageLabel'
import Image from 'next/image'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { FaInstagram, FaFacebookF } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const page = () => {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white relative">
     
        <Navbar />
        <PageLabel title="our services" />
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-8 sm:mt-10 md:mt-15">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">search engine optimization.</h1>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded transition">
                <BsArrowLeft className="text-xl sm:text-2xl text-black" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded transition">
                <BsArrowRight className="text-xl sm:text-2xl text-black" />
              </button>
            </div>
            <button className="bg-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg rounded-lg hover:bg-pink-600 transition">
              Book Service
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          <div className="flex-1 flex flex-col gap-4 md:gap-6">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              <p className="text-sm sm:text-base md:text-lg font-bold text-black">keyword research</p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-black">on-page and off-page optimization</p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-black">SEO audits</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="/img1.avif"
                alt="SEO Optimization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16 mb-12 md:mb-16">
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="8"
                  strokeDasharray="254.47 282.74"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">90%</span>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-black text-center">top search result.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="8"
                  strokeDasharray="246.98 282.74"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">87%</span>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-black text-center">active SEO projects.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="8"
                  strokeDasharray="268.60 282.74"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">95%</span>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-black text-center">clients satisfaction.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-16">
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 sm:gap-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                talk to us. let&apos;s unlock your digital potential.
              </h2>
              <div>
                <p className="text-sm sm:text-base md:text-lg text-black mb-3">find us online.</p>
                <div className="flex flex-row gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-4 border-pink-500 flex items-center justify-center bg-white hover:bg-pink-50 transition cursor-pointer">
                    <FaInstagram className="text-black text-lg sm:text-xl md:text-2xl" />
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-4 border-pink-500 flex items-center justify-center bg-white hover:bg-pink-50 transition cursor-pointer">
                    <FaFacebookF className="text-black text-lg sm:text-xl md:text-2xl" />
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-4 border-pink-500 flex items-center justify-center bg-white hover:bg-pink-50 transition cursor-pointer">
                    <FaXTwitter className="text-black text-lg sm:text-xl md:text-2xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-end justify-center gap-6 sm:gap-8">
              <form className="flex flex-col gap-6 w-full">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                  <div className="flex-1 flex flex-col gap-2 w-full">
                    <label htmlFor="firstName" className="text-sm sm:text-base md:text-lg font-bold text-black">first name.</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="px-0 py-2 sm:py-2.5 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500 text-sm sm:text-base md:text-lg placeholder:text-gray-400 w-full"
                      placeholder="first name."
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-2 w-full">
                    <label htmlFor="lastName" className="text-sm sm:text-base md:text-lg font-bold text-black">last name.</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="px-0 py-2 sm:py-2.5 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500 text-sm sm:text-base md:text-lg placeholder:text-gray-400 w-full"
                      placeholder="last name."
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                  <div className="flex-1 flex flex-col gap-2 w-full">
                    <label htmlFor="phone" className="text-sm sm:text-base md:text-lg font-bold text-black">Phone no.</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="px-0 py-2 sm:py-2.5 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500 text-sm sm:text-base md:text-lg placeholder:text-gray-400 w-full"
                      placeholder="xxxxxxxxxxx"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-2 w-full">
                    <label htmlFor="email" className="text-sm sm:text-base md:text-lg font-bold text-black">email.</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="px-0 py-2 sm:py-2.5 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500 text-sm sm:text-base md:text-lg placeholder:text-gray-400 w-full"
                      placeholder="example@gmail"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="message" className="text-sm sm:text-base md:text-lg font-bold text-black">message.</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="px-0 py-2 sm:py-2.5 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500 text-sm sm:text-base md:text-lg placeholder:text-gray-400 resize-none w-full"
                    placeholder="type here"
                  />
                </div>
                <div className="flex justify-end w-full">
                  <button
                    type="submit"
                    className="bg-pink-500 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg rounded-lg hover:bg-pink-600 transition"
                  >
                    submit
                  </button>
                </div>
              </form>
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
