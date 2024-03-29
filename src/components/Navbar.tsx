'use client'
import { toggleMenu } from '@/lib/features/menu/menuSlice'
import { useAppDispatch } from '@/lib/hooks'
import Image from 'next/image'

export default function Navbar() {
  const dispatch = useAppDispatch()
  // const isMenuOpen = useAppSelector((state) => state.menu.isOpen)

  return (
    <nav className='fixed top-0 flex h-20 w-full items-center bg-white px-6'>
      <div>
        <Image src='/assets/icons/logo.svg' alt='Logo' width={50} height={50} />
      </div>
      <div className='mx-2 flex h-12 w-full self-center rounded-full bg-[#F9FAFC] md:ml-12 md:w-[576px]'>
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
      <div className='block md:hidden'>
        <button onClick={() => dispatch(toggleMenu())}>
          <Image
            src='/assets/icons/burger.svg'
            alt='Search'
            width={30}
            height={30}
            className='ml-4 mr-4'
          />
        </button>
      </div>
    </nav>
  )
}
