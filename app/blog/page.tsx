'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Label from '@/components/Label'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import PageLabel from '@/components/PageLabel'

const page = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How Small Brands Can Win Big With Paid Ads",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla ornare eget felis rhoncus ornare. mauris. ipsum dolor sit amet, consectetur adipiscing",
      image: "/img1.avif",
      featured: true
    },
    {
      id: 2,
      title: "Turning Engagement into Revenue",
      description: "",
      image: "",
      featured: false
    },
    {
        id: 3,
        title: "Turning Engagement into Revenue",
        description: "",
        image: "",
        featured: false
      },
    {
      id: 4,
      title: "Why Social Media Strategy Drives Real Results",
      description: "",
      image: "",
      featured: false
    },
    {
      id: 5,
      title: "The Power of Consistent Branding in a Noisy World",
      description: "",
      image: "",
      featured: false
    },
    {
      id: 6,
      title: "Maximize Your Brand with Social Media Marketing",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla ornare eget felis rhoncus ornare.",
      image: "/img1.avif",
      featured: false
    },
    {
      id: 7,
      title: "The Secret Sauce Behind Viral Campaigns",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla ornare eget felis rhoncus ornare.",
      image: "/img1.avif",
      featured: false
    }
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const articleList = blogPosts.filter(post => !post.featured && !post.image)
  const gridPosts = blogPosts.filter(post => !post.featured && post.image)

  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-center gap-5 sm:gap-8 md:gap-8 bg-white">
      <Navbar />
      <PageLabel title="*our blogs." />
      <section className="w-full  max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-6 sm:mt-8 md:mt-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
          <div className="flex flex-col gap-3 md:gap-4">
            <h1 className="text-gray-300 italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">blogs</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla ornare eget felis.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <p className="text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">fresh</p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">insights.</p>
          </div>
        </div>
        <div className="bg-gray-300 w-full h-px mt-8"></div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-8 sm:mt-10 md:mt-12">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12">
          {featuredPost && (
            <div className="flex-1 lg:flex-[1.2]">
              <Link href="/detailed-blog" className="group">
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 group-hover:text-pink-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                  {featuredPost.description}
                </p>
                <MdArrowOutward className="text-pink-600 text-2xl sm:text-3xl md:text-4xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          )}
          <div className="flex-1 lg:flex-[0.8] flex flex-col gap-8">
            {articleList.map((article, index) => (
              <div key={article.id}>
                <Link href="/detailed-blog" className="group block py-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black group-hover:text-pink-600 transition-colors flex-1">
                      {article.title}
                    </h3>
                    <MdArrowOutward className="text-pink-600 text-xl sm:text-2xl md:text-3xl shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </Link>
                {index < articleList.length - 1 && (
                  <div className="bg-gray-300 w-full h-px"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-8 sm:mt-10 md:mt-12 mb-5 sm:mb-6 md:mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {gridPosts.map((post) => (
            <Link key={post.id} href="/detailed-blog" className="group">
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 group-hover:text-pink-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {post.description}
              </p>
              <MdArrowOutward className="text-pink-600 text-2xl sm:text-3xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          ))}
        </div>
      </section>

      <Label />
      <Footer />
    </main>
  )
}

export default page