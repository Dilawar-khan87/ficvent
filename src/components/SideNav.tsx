'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideNav() {
  const pathname = usePathname()
  return (
    <aside className='fixed top-28 z-[998] ml-3 hidden h-[calc(100vh-140px)] w-20 flex-col items-center gap-y-6 rounded-full bg-white py-8 md:flex'>
      <Link
        href='/dashboard/events'
        className={`rounded-full p-4 hover:bg-[#ECEAFF] ${pathname === '/dashboard/events' ? 'bg-[#ECEAFF]' : 'bg-[#F8F9FB]'}`}
      >
        <Image
          src='/assets/icons/dashboard.svg'
          width={20}
          height={20}
          alt='Dashboard'
        />
      </Link>
      <Link
        href='/dashboard/events/favorites'
        className={`rounded-full p-4 hover:bg-[#ECEAFF] ${pathname === '/dashboard/events/favorites' ? 'bg-[#ECEAFF]' : 'bg-[#F8F9FB]'}`}
      >
        <Image
          src='/assets/icons/heart.svg'
          width={20}
          height={20}
          alt='Favorites'
        />
      </Link>
    </aside>
  )
}
