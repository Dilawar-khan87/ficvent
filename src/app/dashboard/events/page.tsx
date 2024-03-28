'use client'
import EventModal from '@/components/EventModal'
import EventsTable from '@/components/EventsTable'
import Image from 'next/image'
import React from 'react'

function Events() {
  return (
    <div>
      <div className='flex'>
        <div className='w-2/3  px-6'>
          <div
            className='max-h-[660px] overflow-auto'
            style={{
              scrollbarColor: '#D9D9D9',
              scrollbarWidth: 'thin',
            }}
          >
            <div className='flex w-full justify-between'>
              <h1 className='text-xl font-bold'>Events List</h1>
              <button className='mr-2 flex h-10 w-10 items-center justify-center shadow-lg shadow-[#5041BC]/30'>
                <Image
                  src='/assets/icons/menu.svg'
                  alt='Menu'
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <EventsTable />
          </div>
          <div className='mt-8 flex gap-12'>
            <div className='flex h-[130px] w-1/3 flex-col rounded-3xl border border-[#F3F3F3] bg-white p-6'>
              <span className='text-sm text-[#797D8C]'>All Events</span>
              <span className='text-[2rem] font-bold'>2.10k</span>
            </div>
            <div className='flex h-[130px] w-1/3 flex-col rounded-3xl border border-[#F3F3F3] bg-white p-6'>
              <span className='text-sm text-[#797D8C]'>This Month Events</span>
              <span className='text-[2rem] font-bold'>30</span>
            </div>
            <div className='flex h-[130px] w-1/3 flex-col rounded-3xl border border-[#F3F3F3] bg-white p-6'>
              <span className='text-sm text-[#797D8C]'>Favorite Events</span>
              <span className='text-[2rem] font-bold'>25</span>
            </div>
          </div>
        </div>
        <div className='flex w-1/3 flex-col'>
          <div
            className='max-h-[578px] overflow-auto rounded-2xl bg-white px-4 py-8'
            style={{
              scrollbarColor: '#D9D9D9',
              scrollbarWidth: 'thin',
              // thumb
            }}
          >
            <h2 className='mb-4 text-2xl'>Upcoming Events</h2>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <div
                key={item}
                className='mb-3 flex items-center justify-between rounded-[15px] border-[1.5px] border-[#F3F3F3] px-4 py-2'
              >
                <div className='flex flex-col'>
                  <span className='text-[16px] font-[600]'>
                    Web Development
                  </span>
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
          <div className='my-8'>
            <div
              className='rounded-3xl bg-[#5041BC] p-6'
              style={{ backgroundImage: '/assets/images/card-bg.png' }}
            >
              <div
                className='flex justify-center '
                // style={{
                //   background: `linear-gradient(229.42deg, #5041BC 26.93%, #A26AEA 98.11%)`,
                // }}
              >
                <span className='mr-6 text-[34px] font-bold leading-10 text-white'>
                  Event of the month
                </span>
                <Image
                  className='ml-4'
                  src='/assets/icons/ribbon.svg'
                  width={70}
                  height={70}
                  alt='Ribbon'
                />
              </div>
              <div className='mt-2 rounded-2xl bg-white p-4'>
                <div className='flex items-center justify-between'>
                  <span className='text-base font-bold text-[#5041BC]'>
                    Web Development
                  </span>
                  <div className='flex'>
                    <div>
                      <Image
                        className='relative z-[3] rounded-full'
                        src='/assets/icons/avatar-1.jpg'
                        width={30}
                        height={30}
                        alt='Ribbon'
                      />
                    </div>
                    <div>
                      <Image
                        className='relative left-[-10px] z-[2]  rounded-full'
                        src='/assets/icons/avatar-2.jpg'
                        width={30}
                        height={30}
                        alt='Ribbon'
                      />
                    </div>
                    <div>
                      <Image
                        className='relative left-[-20px] z-[1] rounded-full'
                        src='/assets/icons/avatar-3.jpg'
                        width={30}
                        height={30}
                        alt='Ribbon'
                      />
                    </div>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <div className='flex flex-col'>
                    <div>
                      <span className='text-[12px]'>
                        Category: <span className='font-bold'>AI</span>
                      </span>
                    </div>
                    <div className='flex w-full'>
                      <Image
                        className=''
                        src='/assets/icons/location.svg'
                        width={18}
                        height={18}
                        alt='Location'
                      />
                      <span className='px-2 text-[12px]'>
                        Bahria Intellectual Village
                      </span>
                    </div>
                  </div>
                  <div className='max-w-[93px] leading-[14px]'>
                    <span className='text-[12px]'>Thu 2 Nov 2023 12:00am</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
