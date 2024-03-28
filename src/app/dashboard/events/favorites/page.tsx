import Image from 'next/image'
import React from 'react'

function FavoriteEvents() {
  return (
    <div>
      <div className='w-full px-6'>
        <div className='flex w-full justify-between'>
          <h1 className='text-xl font-bold'>Favorite Events</h1>
          <button className='flex h-10 w-10 items-center justify-center shadow-lg shadow-[#5041BC]/30'>
            <Image
              src='/assets/icons/menu.svg'
              alt='Menu'
              width={20}
              height={20}
            />
          </button>
        </div>
        <div>
          <div>
            <span>#</span>
            <span>NAME</span>
            <span>TIME</span>
            <span>DATE</span>
            <span>LOCATION</span>
          </div>
          <div>
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className=' bg-white'>
                <span className='rounded-l-2xl px-6 py-4'>{item}</span>
                <span className='px-6 py-4'>NAME</span>
                <span className='px-6 py-4'>TIME</span>
                <span className='px-6 py-4'>DATE</span>
                <span className='px-6 py-4'>LOCATION</span>
                <span className='rounded-r-2xl px-6 py-4'>
                  <Image
                    src='/assets/icons/heart-solid-red.svg'
                    alt='Menu'
                    width={20}
                    height={20}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavoriteEvents
