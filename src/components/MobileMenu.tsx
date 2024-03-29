'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toggleMenu } from '@/lib/features/menu/menuSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
}

// animate={{ x: 100 }}
//   transition={{ ease: "easeOut", duration: 2 }}
export default function MobileMenu() {
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const isMenuOpen = useAppSelector((state) => state.menu.isOpen)

  useEffect(() => {
    if (isMenuOpen) {
      dispatch(toggleMenu())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <motion.div
      animate={isMenuOpen ? 'open' : 'closed'}
      transition={{ ease: 'easeIn', duration: 0.5 }}
      variants={variants}
      className='fixed z-[999] block h-screen w-full bg-indigo-600 md:hidden'
    >
      <div className='flex justify-between px-6 py-4'>
        <div>
          <Image
            src='/assets/icons/logo-white.svg'
            alt='Search'
            width={50}
            height={50}
            className='ml-4 mr-4'
          />
        </div>
        <button onClick={() => dispatch(toggleMenu())}>
          <Image
            src='/assets/icons/close.svg'
            alt='Search'
            width={30}
            height={30}
            className='ml-4 mr-4'
          />
        </button>
      </div>
      <div className='flex flex-col items-center px-6 py-4 text-center text-3xl text-white'>
        <ul className='w-full'>
          <li className='mt-4 w-full border-b-[1.5px] border-white pb-2'>
            <Link href='/dashboard/events'>Dashboard</Link>
          </li>
          <li className='mt-4 w-full border-b-[1.5px] border-white pb-2'>
            <Link href='/dashboard/events/favorites'>Favorite Events</Link>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}
