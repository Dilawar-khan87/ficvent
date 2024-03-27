import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='fixed top-0 flex h-20 w-full items-center bg-white px-6'>
      <div>
        <Image src='/assets/icons/logo.svg' alt='Logo' width={50} height={50} />
      </div>
      <div className='ml-12 flex h-12 w-[576px] rounded-full bg-[#F9FAFC]'>
        <Image
          src='/assets/icons/search.svg'
          alt='Search'
          width={24}
          height={24}
          className='ml-4 mr-2'
        />
        <input
          type='text'
          placeholder='Search'
          className='w-full bg-transparent font-[#3D4756] text-lg outline-none'
        />
      </div>
    </nav>
  )
}
