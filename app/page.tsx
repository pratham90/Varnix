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
    <main className="flex flex-col min-h-screen bg-zinc-50 font-sans text-black overflow-hidden">
      <Navbar />
      <section className="flex flex-col items-center justify-start h-[60vh] tracking-tight text-8xl py-16 font-bold gap-4" aria-label="Hero">
        <h1 className="text-gray-200">Where Strategy</h1>
        <h1 className="text-gray-950">meets creativity</h1>
        <button className="bg-pink-500 px-4 py-2 text-white text-xl tracking-normal mt-10 rounded-2xl cursor-pointer inline-block mx-auto hover:bg-pink-600 transition">
          Explore Now
        </button>
      </section>
      <Aboutus />
      <section className="mt-7 flex flex-col gap-7 justify-start items-center" aria-label="What We Do">
        <h2 className="text-xl font-semibold">What we do</h2>
        <p className="text-5xl">Empowering Brands To Grow Online.</p>
        <div className="flex justify-center items-start gap-55 mt-8">
          <div className="flex flex-row gap-3 items-start justify-start text-7xl">
            <MdArrowOutward className="text-pink-600" />
            <h3 className="font-bold">Social Media
              <p>Marketing.</p>
            </h3>
          </div>
          <div className="text-lg flex flex-col mt-15 justify-end items-end">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
            <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
          </div>
        </div>
        <div className="bg-gray-300 w-6/7 h-0.5"></div>
        <div className="flex justify-center items-start gap-55 mt-8">
          <div className="text-lg flex flex-col mt-15 justify-end items-start">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
            <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
          </div>
          <div className="flex flex-row gap-3 items-start justify-start text-7xl">
            <h3 className="flex items-end flex-col font-bold">Social Media
              <p>Marketing.</p>
            </h3>
            <MdArrowOutward className="text-pink-600" />
          </div>
        </div>
        <div className="bg-gray-300 w-6/7 h-0.5"></div>
        <div className="flex justify-center items-start gap-55 mt-8">
          <div className="flex flex-row gap-3 items-start justify-start text-7xl">
            <MdArrowOutward className="text-pink-600" />
            <h3 className="font-bold">Social Media
              <p>Marketing.</p>
            </h3>
          </div>
          <div className="text-lg flex flex-col mt-15 justify-end items-end">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
            <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
          </div>
        </div>
        <div className="bg-gray-300 w-6/7 h-0.5"></div>
        <div className="flex justify-center items-start gap-55 mt-8">
          <div className="text-lg flex flex-col mt-15 justify-end items-start">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
            <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
          </div>
          <div className="flex flex-row gap-3 items-start justify-start text-7xl">
            <h3 className="flex items-end flex-col font-bold">Social Media
              <p>Marketing.</p>
            </h3>
            <MdArrowOutward className="text-pink-600" />
          </div>
        </div>
        <div className="bg-gray-300 w-6/7 h-0.5"></div>
      </section>
      <section className="whyus bg-pink-50 py-10 px-8 md:px-32 mt-10 z-10" aria-label="Why Us">
        <div className="flex flex-col items-end justify-start text-2xl">
          <h2 className="text-pink-600 text-xl mb-5 font-bold">Why Us?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Iure nesciunt, debitis voluptatem dolorem deleniti</p>
          <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
        </div>
        <div className="flex flex-wrap justify-around items-end mt-10 h-full gap-8">
          <Image
            src="/img1.avif"
            alt="Brand strategy image"
            width={450}
            height={100}
            className="h-100 rounded-3xl object-cover"
          />
          <Image
            src="/img1.avif"
            alt="Brand strategy image"
            width={300}
            height={65}
            className="h-65 rounded-3xl object-cover"
          />
          <Image
            src="/img1.avif"
            alt="Brand strategy image"
            width={300}
            height={65}
            className="h-65 rounded-3xl object-cover"
          />
        </div>
       
        <div className="flex justify-center items-start gap-50 mt-8 px-5">
          <div className=" text-lg flex flex-col  mt-15 justify-end items-start">
            <div className="flex flex-row gap-3 items-center text-2xl">
              <div className="bg-pink-600 w-2 h-2 rounded-full"></div>
              <h1>lore dcbs dsi nidnc inds </h1>
            </div>
            <div className="px-5">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
              <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
            </div>
          </div>
          <div className=" text-lg flex flex-col  mt-15 justify-end items-start">
            <div className="flex flex-row gap-3 items-center text-2xl">
              <div className="bg-pink-600 w-2 h-2 rounded-full"></div>
              <h1>lore dcbs dsi nidnc inds </h1>
            </div>
            <div className="px-5">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
              <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start gap-50 mt-8 px-5">
          <div className=" text-lg flex flex-col  mt-15 justify-end items-start">
            <div className="flex flex-row gap-3 items-center text-2xl">
              <div className="bg-pink-600 w-2 h-2 rounded-full"></div>
              <h1>lore dcbs dsi nidnc inds </h1>
            </div>
            <div className="px-5">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
              <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
            </div>
          </div>
          <div className=" text-lg flex flex-col  mt-15 justify-end items-start">
            <div className="flex flex-row gap-3 items-center text-2xl">
              <div className="bg-pink-600 w-2 h-2 rounded-full"></div>
              <h1>lore dcbs dsi nidnc inds </h1>
            </div>
            <div className="px-5">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
              <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
            </div>
          </div>
        </div>
      </section>
      <div className="testimonal flex flex-col justify-center items-start mt-10 px-40 gap-3 ">
        <h1 className="text-pink-600 text-xl">testimonals</h1>
        <p className="text-7xl">What They </p>
        <p className="text-7xl px-25">
          Say <span className="text-gray-200">about us.</span>
        </p>
        <div className="flex justify-center w-full items-start gap-5 mt-3">
          <FaQuoteLeft className="text-[18rem] text-gray-200 tracking-tighter" />
          <div className="py-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Iure nesciunt, debitis voluptatem dolorem deleniti </p>
            <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
            <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>
            <p>neque eum a incidunt rerum ea earum cum assumenda minus</p>

            <div className="flex justify-start items-end gap-3 ">
              <Image
                src="/img1.avif"
                alt="profilepic"
                width={40}
                height={40}
                className="rounded-full w-14 h-14 overflow-hidden mt-5"
              />
              <div className="flex flex-col items-start text-[1rem]  ">
                <p className="font-bold tracking-tight">Pratham Rathore</p>
                <p className="text-gray-300 tracking-looser ">India</p>
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
