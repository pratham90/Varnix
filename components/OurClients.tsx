import Image from 'next/image'

const OurClients = () => {
  return (
    <div className='bg-[#1E1E1E] flex flex-col justify-start items-center py-6 sm:py-8 md:py-10 mt-6 sm:mt-8 md:mt-10 rounded-2xl sm:rounded-3xl md:rounded-4xl gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8'>
        <h1 className='text-pink-600 text-lg sm:text-xl'>Our Clients</h1>
        <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl flex flex-col justify-center items-center tracking-tight text-white text-center px-4'>
            <p>Old buddies, new pals, and</p>
            <p>a bunch of companies!</p>
        </div>
        <div className='flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-30 justify-center items-center w-full'>
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-xl sm:rounded-2xl w-full sm:w-[45%] md:w-[30%] lg:w-[30%] h-40 sm:h-50 md:h-60 object-cover'
            />
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-xl sm:rounded-2xl w-full sm:w-[45%] md:w-[30%] lg:w-[30%] h-40 sm:h-50 md:h-60 object-cover'
            />
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-xl sm:rounded-2xl w-full sm:w-[45%] md:w-[30%] lg:w-[30%] h-40 sm:h-50 md:h-60 object-cover'
            />
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-xl sm:rounded-2xl w-full sm:w-[45%] md:w-[30%] lg:w-[30%] h-40 sm:h-50 md:h-60 object-cover'
            />
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-xl sm:rounded-2xl w-full sm:w-[45%] md:w-[30%] lg:w-[30%] h-40 sm:h-50 md:h-60 object-cover'
            />
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-xl sm:rounded-2xl w-full sm:w-[45%] md:w-[30%] lg:w-[30%] h-40 sm:h-50 md:h-60 object-cover'
            />
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-xl sm:rounded-2xl w-full sm:w-[45%] md:w-[30%] lg:w-[30%] h-40 sm:h-50 md:h-60 object-cover'
            />
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-xl sm:rounded-2xl w-full sm:w-[45%] md:w-[30%] lg:w-[30%] h-40 sm:h-50 md:h-60 object-cover'
            />
        </div>
      
    </div>
  )
}

export default OurClients;
