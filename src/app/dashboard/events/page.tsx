import Image from 'next/image'
import React from 'react'

function Events() {
  return (
    <div>
      <div className='flex'>
        <div className='w-2/3 px-6'>
          <div className='flex w-full justify-between'>
            <h1 className='text-xl font-bold'>Events List</h1>
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
            <div className='flex justify-between border-b border-[#6A6A6A]'>
              <span className='px-6 py-4'>#</span>
              <span className='px-6 py-4'>NAME</span>
              <span className='px-6 py-4'>TIME</span>
              <span className='px-6 py-4'>DATE</span>
              <span className='px-6 py-4'>LOCATION</span>
              <span className='px-6 py-4'>
                <span className='h-4 w-4 p-5'></span>
              </span>
            </div>
            <div className='flex w-full flex-col'>
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className='mt-4 flex items-center justify-between rounded-xl border border-[#F3F3F3] bg-white'
                >
                  <span className='px-6 py-4'>{item}</span>
                  <span className='px-6 py-4'>NAME</span>
                  <span className='px-6 py-4'>TIME</span>
                  <span className='px-6 py-4'>DATE</span>
                  <span className='px-6 py-4'>LOCATION</span>
                  <div className='px-6 py-4'>
                    <button className='flex items-center justify-center rounded-full p-2 hover:bg-[#ECEAFF]'>
                      <Image
                        src='/assets/icons/heart-purple.svg'
                        alt='Menu'
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='mt-8 flex gap-12'>
            <div className='flex h-[130px] w-1/3 flex-col rounded-3xl bg-white p-6'>
              <span className='text-sm text-[#797D8C]'>All Events</span>
              <span className='text-[2rem] font-bold'>2.10k</span>
            </div>
            <div className='flex h-[130px] w-1/3 flex-col rounded-3xl bg-white p-6'>
              <span className='text-sm text-[#797D8C]'>All Events</span>
              <span className='text-[2rem] font-bold'>2.10k</span>
            </div>
            <div className='flex h-[130px] w-1/3 flex-col rounded-3xl bg-white p-6'>
              <span className='text-sm text-[#797D8C]'>All Events</span>
              <span className='text-[2rem] font-bold'>2.10k</span>
            </div>
          </div>
        </div>
        <div className='h-screen w-1/3 overflow-auto rounded-2xl bg-white px-4 py-8'>
          <h2 className='mb-4 text-2xl'>Upcoming Events</h2>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div
              key={item}
              className='mb-3 flex items-center justify-between rounded-[15px] border-[1.8px] border-[#F3F3F3] px-4 py-2'
            >
              <div className='flex flex-col'>
                <span className='text-[16px] font-[600]'>Web Development</span>
                <span className='text-[12px] text-[#797D8C]'>
                  Thu 2 Nov, 12:00AM
                </span>
              </div>
              <div>
                <Image
                  src='/assets/icons/heart-purple.svg'
                  alt='Menu'
                  width={20}
                  height={20}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events
