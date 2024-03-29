'use client'
import EventMonthCard from '@/components/EventMonthCard'
import EventsTable from '@/components/EventsTable'
import axiosInstance from '@/config/axiosConfig'
import { useAppSelector } from '@/lib/hooks'
import { formatNumberToKFormat } from '@/utils/formatters'
import Image from 'next/image'
import React, { useState } from 'react'

function Events() {
  const favoriteEvents = useAppSelector((state) => state.events.favorites)
  const [totalEventCount, setTotalEventCount] = useState(0)
  axiosInstance
    .get('/events/count/')
    .then((data) => {
      setTotalEventCount(data?.data?.count)
    })
    .catch((err) => {
      console.log(err)
    })
  return (
    <div>
      <div className='flex flex-col md:flex-row'>
        <div className='order-2 mt-8 w-full px-6 md:order-1 md:w-2/3'>
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
          <div className='mt-8 flex gap-2 md:gap-12'>
            <div className='flex h-[130px] w-1/3 flex-col rounded-3xl border border-[#F3F3F3] bg-white p-6'>
              <span className='text-sm text-[#797D8C]'>All Events</span>
              <span className='text-[2rem] font-bold'>
                {formatNumberToKFormat(totalEventCount)}
              </span>
            </div>
            <div className='flex h-[130px] w-1/3 flex-col rounded-3xl border border-[#F3F3F3] bg-white p-6'>
              <span className='text-sm text-[#797D8C]'>This Month Events</span>
              <span className='text-[2rem] font-bold'>30</span>
            </div>
            <div className='flex h-[130px] w-1/3 flex-col rounded-3xl border border-[#F3F3F3] bg-white p-6'>
              <span className='text-sm text-[#797D8C]'>Favorite Events</span>
              <span className='text-[2rem] font-bold'>
                {favoriteEvents.length}
              </span>
            </div>
          </div>
          <div className='my-8 block md:hidden'>
            <EventMonthCard />
          </div>
        </div>
        <div className='order-1 flex w-full flex-col self-center  md:w-1/3'>
          <div className='overflow-auto rounded-2xl bg-white p-4'>
            <h2 className='mb-4 text-2xl'>Upcoming Events</h2>
            <div
              className='flex max-h-[578px] flex-wrap gap-2'
              style={{
                scrollbarColor: '#D9D9D9',
                scrollbarWidth: 'thin',
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <div
                  key={item}
                  className='mb-3 flex w-[calc(50%-0.5rem)] items-center justify-between rounded-[15px] border-[1.5px] border-[#F3F3F3] px-4 py-2 md:w-full'
                >
                  <div className='flex flex-col'>
                    <span className='text-[11px] font-[600] md:text-[16px]'>
                      Web Development
                    </span>
                    <span className='text-[9px] text-[#797D8C] md:text-[12px]'>
                      Thu 2 Nov, 12:00AM
                    </span>
                  </div>
                  <div>
                    <Image
                      src='/assets/icons/heart-purple.svg'
                      alt='Menu'
                      width={18}
                      height={18}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='my-8 hidden md:block'>
            <EventMonthCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
