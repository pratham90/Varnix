import Aboutus from "@/components/Aboutus";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurClients from "@/components/OurClients";
import Label from "@/components/Label";
import { FaQuoteLeft } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-50 font-sans text-black overflow-x-hidden">
      <Navbar />
      <section className="flex flex-col items-center justify-start min-h-[50vh] sm:h-[60vh] tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl py-8 sm:py-12 md:py-16 font-bold gap-2 sm:gap-4 px-4" aria-label="Hero">
        <h1 className="text-gray-200 text-center">Where Strategy</h1>
        <h1 className="text-gray-950 text-center">meets creativity</h1>
        <button className="bg-pink-500 px-4 py-2 text-white text-base sm:text-lg md:text-xl tracking-normal mt-6 sm:mt-8 md:mt-10 rounded-2xl cursor-pointer inline-block mx-auto hover:bg-pink-600 transition">
          Explore Now
        </button>
      </section>
      <Aboutus />
      <section className="mt-7 flex flex-col gap-4 sm:gap-7 justify-start items-center px-4" aria-label="What We Do">
        <h2 className="text-lg sm:text-xl font-semibold">What we do</h2>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center px-4">Empowering Brands To Grow Online.</p>
        <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-12 lg:gap-16 xl:gap-20 mt-6 sm:mt-8 w-full max-w-7xl">
          <div className="flex flex-row gap-2 sm:gap-3 items-start justify-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <MdArrowOutward className="text-pink-600 shrink-0" />
            <h3 className="font-bold">Social Media
              <p>Marketing.</p>
            </h3>
          </div>
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start md:items-end w-full md:w-auto">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
            <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
          </div>
        </div>
        <div className="bg-gray-300 w-11/12 sm:w-6/7 h-0.5"></div>
        <div className="flex flex-col md:flex-row-reverse justify-center items-start gap-4 md:gap-12 lg:gap-16 xl:gap-20 mt-6 sm:mt-8 w-full max-w-7xl">
          <div className="flex flex-row gap-2 sm:gap-3 items-start justify-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <h3 className="flex items-end flex-col font-bold">Social Media
              <p>Marketing.</p>
            </h3>
            <MdArrowOutward className="text-pink-600 shrink-0" />
          </div>
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start w-full md:w-auto">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
            <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
          </div>
        </div>
        <div className="bg-gray-300 w-11/12 sm:w-6/7 h-0.5"></div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-12 lg:gap-16 xl:gap-20 mt-6 sm:mt-8 w-full max-w-7xl">
          <div className="flex flex-row gap-2 sm:gap-3 items-start justify-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <MdArrowOutward className="text-pink-600 shrink-0" />
            <h3 className="font-bold">Social Media
              <p>Marketing.</p>
            </h3>
          </div>
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start md:items-end w-full md:w-auto">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
            <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
          </div>
        </div>
        <div className="bg-gray-300 w-11/12 sm:w-6/7 h-0.5"></div>
        <div className="flex flex-col md:flex-row-reverse justify-center items-start gap-4 md:gap-12 lg:gap-16 xl:gap-20 mt-6 sm:mt-8 w-full max-w-7xl">
          <div className="flex flex-row gap-2 sm:gap-3 items-start justify-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <h3 className="flex items-end flex-col font-bold">Social Media
              <p>Marketing.</p>
            </h3>
            <MdArrowOutward className="text-pink-600 shrink-0" />
          </div>
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start w-full md:w-auto">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
            <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
          </div>
        </div>
        <div className="bg-gray-300 w-11/12 sm:w-6/7 h-0.5"></div>
      </section>
      <section className="whyus bg-pink-50 py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-16 lg:px-32 mt-10 z-10" aria-label="Why Us">
        <div className="flex flex-col items-center sm:items-end justify-start text-base sm:text-lg md:text-xl lg:text-2xl">
          <h2 className="text-pink-600 text-lg sm:text-xl mb-3 sm:mb-5 font-bold">Why Us?</h2>
          <p className="text-center sm:text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="text-center sm:text-right">Iure nesciunt, debitis voluptatem dolorem deleniti</p>
          <p className="text-center sm:text-right">neque eum a incidunt rerum ea earum cum assumenda minus</p>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-around items-end mt-6 sm:mt-10 h-full gap-4 sm:gap-6 md:gap-8">
          <Image
            src="/img1.avif"
            alt="Brand strategy image"
            width={450}
            height={100}
            className="w-full sm:w-auto h-auto sm:h-100 rounded-2xl sm:rounded-3xl object-cover max-w-full sm:max-w-[450px]"
          />
          <Image
            src="/img1.avif"
            alt="Brand strategy image"
            width={300}
            height={65}
            className="w-full sm:w-auto h-auto sm:h-65 rounded-2xl sm:rounded-3xl object-cover max-w-full sm:max-w-[300px]"
          />
          <Image
            src="/img1.avif"
            alt="Brand strategy image"
            width={300}
            height={65}
            className="w-full sm:w-auto h-auto sm:h-65 rounded-2xl sm:rounded-3xl object-cover max-w-full sm:max-w-[300px]"
          />
        </div>
       
        <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8 lg:gap-12 xl:gap-16 mt-6 sm:mt-8 px-2 sm:px-5">
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start w-full md:w-auto">
            <div className="flex flex-row gap-2 sm:gap-3 items-center text-lg sm:text-xl md:text-2xl">
              <div className="bg-pink-600 w-2 h-2 rounded-full shrink-0"></div>
              <h1>lore dcbs dsi nidnc inds </h1>
            </div>
            <div className="px-2 sm:px-5 mt-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
              <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
            </div>
          </div>
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start w-full md:w-auto">
            <div className="flex flex-row gap-2 sm:gap-3 items-center text-lg sm:text-xl md:text-2xl">
              <div className="bg-pink-600 w-2 h-2 rounded-full shrink-0"></div>
              <h1>lore dcbs dsi nidnc inds </h1>
            </div>
            <div className="px-2 sm:px-5 mt-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
              <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8 lg:gap-12 xl:gap-16 mt-6 sm:mt-8 px-2 sm:px-5">
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start w-full md:w-auto">
            <div className="flex flex-row gap-2 sm:gap-3 items-center text-lg sm:text-xl md:text-2xl">
              <div className="bg-pink-600 w-2 h-2 rounded-full shrink-0"></div>
              <h1>lore dcbs dsi nidnc inds </h1>
            </div>
            <div className="px-2 sm:px-5 mt-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
              <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
            </div>
          </div>
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start w-full md:w-auto">
            <div className="flex flex-row gap-2 sm:gap-3 items-center text-lg sm:text-xl md:text-2xl">
              <div className="bg-pink-600 w-2 h-2 rounded-full shrink-0"></div>
              <h1>lore dcbs dsi nidnc inds </h1>
            </div>
            <div className="px-2 sm:px-5 mt-2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
              <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
            </div>
          </div>
        </div>
      </section>
      <div className="testimonal flex flex-col justify-center items-start mt-6 sm:mt-8 md:mt-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 gap-2 sm:gap-3">
        <h1 className="text-pink-600 text-lg sm:text-xl">testimonals</h1>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">What They </p>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:px-12 md:px-20 lg:px-25">
          Say <span className="text-gray-200">about us.</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center w-full items-start gap-3 sm:gap-5 mt-3">
          <FaQuoteLeft className="text-6xl sm:text-8xl md:text-12xl lg:text-16xl xl:text-[18rem] text-gray-200 tracking-tighter shrink-0 self-center sm:self-start" />
          <div className="py-2 sm:py-4">
            <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="text-sm sm:text-base">Iure nesciunt, debitis voluptatem dolorem deleniti </p>
            <p className="text-sm sm:text-base">neque eum a incidunt rerum ea earum cum assumenda minus</p>
            <p className="text-sm sm:text-base">neque eum a incidunt rerum ea earum cum assumenda minus</p>
            <p className="text-sm sm:text-base">neque eum a incidunt rerum ea earum cum assumenda minus</p>

            <div className="flex justify-start items-end gap-2 sm:gap-3 mt-3 sm:mt-5">
              <Image
                src="/img1.avif"
                alt="profilepic"
                width={40}
                height={40}
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 overflow-hidden"
              />
              <div className="flex flex-col items-start text-sm sm:text-base md:text-[1rem]">
                <p className="font-bold tracking-tight">Pratham Rathore</p>
                <p className="text-gray-300 tracking-looser">India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     <OurClients />
     <Label />
    
      <Footer />
    </main>
  );
}
