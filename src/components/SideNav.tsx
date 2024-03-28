import Image from 'next/image'
import Link from 'next/link'

export default function SideNav() {
  return (
    <aside className='fixed top-28 ml-3 flex h-[calc(100vh-140px)] w-20 flex-col items-center gap-y-6 rounded-full bg-white py-8'>
      <Link
        href='/dashboard/events'
        className='rounded-full bg-[#F8F9FB] p-4 hover:bg-[#ECEAFF]'
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
        className='rounded-full bg-[#F8F9FB] p-4 hover:bg-[#ECEAFF]'
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
