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
    <main className="flex flex-col min-h-screen bg-white font-sans text-black overflow-x-hidden">
      <Navbar />
      <section
        className="flex flex-col items-center justify-start min-h-[50vh] sm:h-[60vh] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl py-10 sm:py-14 md:py-16 font-bold gap-3 sm:gap-4 px-4 animate-fade-in-up"
        aria-label="Hero"
      >
        <h1 className="text-gray-200 text-center">Professional Personal</h1>
        <h1 className="text-gray-950 text-center">Digital Marketing</h1>
        <button className="bg-pink-500 px-5 sm:px-6 md:px-8 py-2.5 md:py-3 text-white text-sm sm:text-base md:text-lg tracking-normal mt-6 sm:mt-8 md:mt-10 rounded-2xl cursor-pointer inline-block mx-auto hover:bg-pink-600 hover:shadow-lg hover:scale-105 transition-transform transition-colors duration-300">
          Explore Now
        </button>
      </section>
      <Aboutus />
      <section
        className="mt-10 flex flex-col gap-4 sm:gap-7 justify-start items-center px-4 animate-fade-in-up"
        aria-label="What We Do"
      >
        <h2 className="text-base sm:text-lg md:text-xl font-semibold tracking-wide uppercase text-gray-500">
          What we do
        </h2>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center px-4 max-w-3xl">
          Empowering Brands To Grow Online.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-12 lg:gap-16 xl:gap-20 mt-6 sm:mt-8 w-full max-w-7xl">
          <div className="flex flex-row gap-2 sm:gap-3 items-start justify-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <MdArrowOutward className="text-pink-600 shrink-0" />
            <h3 className="font-bold">
              Brand Strategy
              <p>& Identity.</p>
            </h3>
          </div>
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start md:items-end w-full md:w-auto">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
            <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
          </div>
        </div>
        <div className="bg-gray-200 w-11/12 sm:w-5/6 h-px"></div>
        <div className="flex flex-col md:flex-row-reverse justify-center items-start gap-4 md:gap-12 lg:gap-16 xl:gap-20 mt-6 sm:mt-8 w-full max-w-7xl">
          <div className="flex flex-row gap-2 sm:gap-3 items-start justify-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <h3 className="flex items-end flex-col font-bold">
              Brand Strategy
              <p>& Indentity.</p>
            </h3>
            <MdArrowOutward className="text-pink-600 shrink-0" />
          </div>
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start w-full md:w-auto">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
            <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
          </div>
        </div>
        <div className="bg-gray-200 w-11/12 sm:w-5/6 h-px"></div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-12 lg:gap-16 xl:gap-20 mt-6 sm:mt-8 w-full max-w-7xl">
          <div className="flex flex-row gap-2 sm:gap-3 items-start justify-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <MdArrowOutward className="text-pink-600 shrink-0" />
            <h3 className="font-bold">
              Brand Strategy
              <p>& Identity.</p>
            </h3>
          </div>
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start md:items-end w-full md:w-auto">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
            <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
          </div>
        </div>
        <div className="bg-gray-200 w-11/12 sm:w-5/6 h-px"></div>
        <div className="flex flex-col md:flex-row-reverse justify-center items-start gap-4 md:gap-12 lg:gap-16 xl:gap-20 mt-6 sm:mt-8 w-full max-w-7xl">
          <div className="flex flex-row gap-2 sm:gap-3 items-start justify-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <h3 className="flex items-end flex-col font-bold">
              Brand Strategy
              <p>& Identity.</p>
            </h3>
            <MdArrowOutward className="text-pink-600 shrink-0" />
          </div>
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start w-full md:w-auto">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
            <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
          </div>
        </div>
        <div className="bg-gray-200 w-11/12 sm:w-5/6 h-px"></div>
      </section>

      <section
        className="whyus bg-pink-50 py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 mt-12 z-10 animate-fade-in-up"
        aria-label="Why Us"
      >
        <div className="flex flex-col items-center sm:items-end justify-start text-base sm:text-lg md:text-xl lg:text-2xl">
          <h2 className="text-pink-600 text-lg sm:text-xl mb-3 sm:mb-5 font-bold">
            Why Brands Choose Varnix ?
          </h2>
          <p className="text-center sm:text-right w-full sm:w-2/3 md:w-1/2 leading-relaxed">
            Choosing the right partner defines how far a brand can go. At
            Varnix, we blend strategy, creativity, and innovation to help brands
            stand out, stay relevant, and grow with purpose.
          </p>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-around items-end mt-6 sm:mt-10 h-full gap-4 sm:gap-6 md:gap-8 animate-slide-in-right">
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
              <h1>Strategic-First Apporach </h1>
            </div>
            <div className="px-2 sm:px-5 mt-2">
              <p>
                We deep-dive into your brand DNA and market space before
                crafting any campaign—strategies built on insights, not
                guesswork.
              </p>
            </div>
          </div>
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start w-full md:w-auto">
            <div className="flex flex-row gap-2 sm:gap-3 items-center text-lg sm:text-xl md:text-2xl">
              <div className="bg-pink-600 w-2 h-2 rounded-full shrink-0"></div>
              <h1>Creativity with a Purpose </h1>
            </div>
            <div className="px-2 sm:px-5 mt-2">
              <p>
                No art-for-art’s-sake—every visual, line, and campaign is
                crafted to deliver measurable results and real engagement.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8 lg:gap-12 xl:gap-36 mt-6 sm:mt-8 px-2 sm:px-5">
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start w-full md:w-auto">
            <div className="flex flex-row gap-2 sm:gap-3 items-center text-lg sm:text-xl md:text-2xl">
              <div className="bg-pink-600 w-2 h-2 rounded-full shrink-0"></div>
              <h1>Integrated Services, Singular Vision </h1>
            </div>
            <div className="px-2 sm:px-5 mt-2">
              <p>
                Branding, media buying, influencer marketing, AI content—every
                touch-point aligns to your larger narrative.
              </p>
            </div>
          </div>
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start w-full md:w-auto">
            <div className="flex flex-row gap-2 sm:gap-3 items-center text-lg sm:text-xl md:text-2xl">
              <div className="bg-pink-600 w-2 h-2 rounded-full shrink-0"></div>
              <h1>Data-Led Execution</h1>
            </div>
            <div className="px-2 sm:px-5 mt-2">
              <p>
                Real-time analytics, A/B testing, and automation optimise every
                content piece, ad spend, and campaign delivery.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8 lg:gap-12 xl:gap-34 mt-6 sm:mt-8 px-2 sm:px-5">
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start w-full md:w-auto">
            <div className="flex flex-row gap-2 sm:gap-3 items-center text-lg sm:text-xl md:text-2xl">
              <div className="bg-pink-600 w-2 h-2 rounded-full shrink-0"></div>
              <h1>Domain Agnostic, Industry-Focused </h1>
            </div>
            <div className="px-2 sm:px-5 mt-2">
              <p>
                From fashion labels to healthcare apps and global real-estate
                groups—strategic thinking tailored to your vertical.
              </p>
            </div>
          </div>
          <div className="text-sm sm:text-base md:text-lg flex flex-col mt-4 md:mt-15 justify-end items-start w-full md:w-auto">
            <div className="flex flex-row gap-2 sm:gap-3 items-center text-lg sm:text-xl md:text-2xl">
              <div className="bg-pink-600 w-2 h-2 rounded-full shrink-0"></div>
              <h1>Culture-First Thinking</h1>
            </div>
            <div className="px-2 sm:px-5 mt-2">
              <p>
                We tap into real conversations, trends, and cultural moments to
                keep your brand relatable, shareable, and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="testimonal flex flex-col justify-center items-start mt-6 sm:mt-8 md:mt-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 gap-2 sm:gap-3">
        <h1 className="text-pink-600 text-lg sm:text-xl">testimonals</h1>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          What They{" "}
        </p>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:px-12 md:px-20 lg:px-25">
          Say <span className="text-gray-200">about us.</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center w-full items-start gap-3 sm:gap-5 mt-3">
          <FaQuoteLeft className="text-6xl sm:text-8xl md:text-12xl lg:text-16xl xl:text-[18rem] text-gray-200 tracking-tighter shrink-0 self-center sm:self-start" />
          <div className="py-2 sm:py-4">
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-sm sm:text-base">
              Iure nesciunt, debitis voluptatem dolorem deleniti{" "}
            </p>
            <p className="text-sm sm:text-base">
              neque eum a incidunt rerum ea earum cum assumenda minus
            </p>
            <p className="text-sm sm:text-base">
              neque eum a incidunt rerum ea earum cum assumenda minus
            </p>
            <p className="text-sm sm:text-base">
              neque eum a incidunt rerum ea earum cum assumenda minus
            </p>

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
