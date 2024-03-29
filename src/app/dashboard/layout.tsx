import React from 'react'

import Navbar from '@/components/Navbar'
import SideNav from '@/components/SideNav'
import MobileMenu from '@/components/MobileMenu'

interface ILayoutProps {
  children: React.ReactNode
}
export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />
      <SideNav />
      <MobileMenu />
      <main className='fixed left-0 top-20 h-screen w-full overflow-scroll overflow-y-auto px-2 py-12 md:left-16 md:w-[calc(100%-4rem)] md:px-6'>
        {children}
      </main>
    </>
  )
}
