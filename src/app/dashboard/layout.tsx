import React from 'react'

import Navbar from '@/components/Navbar'
import SideNav from '@/components/SideNav'

interface ILayoutProps {
  children: React.ReactNode
}
export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />
      <SideNav />
      <main className='fixed left-16 top-20 h-screen w-[calc(100%-4rem)] overflow-scroll overflow-y-auto px-6 py-12'>
        {children}
      </main>
    </>
  )
}
