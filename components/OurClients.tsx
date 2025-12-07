import Image from 'next/image'

const OurClients = () => {
  return (
    <div className='bg-[#1E1E1E] flex flex-col justify-start items-center py-10 mt-10 rounded-4xl gap-10'>
        <h1 className='text-pink-600 text-xl'>Our Clients</h1>
        <div className='text-7xl flex flex-col justify-center items-center tracking-tight text-white'>
            <p>Old buddies, new pals, and</p>
            <p>a bunch of companies!</p>
        </div>
        <div className='flex flex-wrap gap-10 px-30  justify-center items-center '>
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-2xl w-30% h-60 object-cover'
            />
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-2xl w-30% h-60 object-cover'
            />
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-2xl w-30% h-60 object-cover'
            />
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-2xl w-30% h-60 object-cover'
            />
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-2xl w-30% h-60 object-cover'
            />
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-2xl w-30% h-60 object-cover'
            />
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-2xl w-30% h-60 object-cover'
            />
            <Image
                src="/img1.avif"
                alt="Clients Logos"
                width={250}
                height={30}
                className='rounded-2xl w-30% h-60 object-cover'
            />
        </div>
      
    </div>
  )
}

export default OurClients;
