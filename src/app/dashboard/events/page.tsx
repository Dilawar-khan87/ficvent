'use client'
import EventMonthCard from '@/components/EventMonthCard'
import EventsTable from '@/components/EventsTable'
import axiosInstance from '@/config/axiosConfig'
import { addEvents } from '@/lib/features/events/eventSlice'
import { formattedDate, formattedTime, isFutureDate } from '@/utils/date-time'
import { formatNumberToKFormat } from '@/utils/formatters'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import FilterPopover from '@/components/FilterPopover'

function Events() {
  const favoriteEvents = useAppSelector((state) => state.events.favorites)
  const events = useAppSelector((state) => state.events.all)

  const [totalEventCount, setTotalEventCount] = useState(0)

  // const dispatch = useAppDispatch()
  // const events = useAppSelector((state) => state.events.all)
  // const favEvents = useAppSelector((state) => state.events.favorites)
  axiosInstance
    .get('/events/count/')
    .then((data) => {
      setTotalEventCount(data?.data?.count)
    })
    .catch((err) => {
      console.log(err)
    })

  // useEffect(() => {
  //   axiosInstance
  //     .get('/events')
  //     .then((data) => {
  //       console.log(data.data.results)
  //       dispatch(addEvents(data.data.results))
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //   return () => {}
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
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
              <FilterPopover />
            </div>
            <EventsTable />
          </div>
          <div className='mt-8 flex gap-2 md:gap-12'>
            <div className='flex h-[130px] w-1/3 flex-col rounded-3xl border border-[#F3F3F3] bg-white p-6'>
              <span className='text-sm text-[#797D8C]'>All Events</span>

              {totalEventCount ? (
                <span className='text-[1.6rem] font-bold md:text-[2rem]'>
                  {formatNumberToKFormat(totalEventCount)}
                </span>
              ) : (
                <div className='flex justify-center'>
                  <div className='h-16 w-16 animate-spin rounded-full border-8 border-gray-300 border-t-blue-600' />
                </div>
              )}
            </div>
            <div className='flex h-[130px] w-1/3 flex-col rounded-3xl border border-[#F3F3F3] bg-white p-6'>
              <span className='text-sm text-[#797D8C]'>This Month Events</span>
              <span className='text-[1.6rem] font-bold md:text-[2rem]'>30</span>
            </div>
            <div className='flex h-[130px] w-1/3 flex-col rounded-3xl border border-[#F3F3F3] bg-white p-6'>
              <span className='text-sm text-[#797D8C]'>Favorite Events</span>
              <span className='text-[1.6rem] font-bold md:text-[2rem]'>
                {favoriteEvents.length}
              </span>
            </div>
          </div>
          <div className='my-8 block md:hidden'>
            <EventMonthCard />
          </div>
        </div>
        <div className='order-1 flex w-full flex-col  md:w-1/3'>
          <div className='overflow-auto rounded-2xl bg-white p-4'>
            <h2 className='mb-4 text-2xl'>Upcoming Events</h2>
            <div
              className='flex max-h-[578px] flex-wrap gap-2'
              style={{
                scrollbarColor: '#D9D9D9',
                scrollbarWidth: 'thin',
              }}
            >
              {events.map((item) =>
                isFutureDate(item.start) ? (
                  <div
                    key={item.id}
                    className='mb-3 flex w-[calc(50%-0.5rem)] items-center justify-between rounded-[15px] border-[1.5px] border-[#F3F3F3] px-4 py-2 md:w-full'
                  >
                    <div className='flex flex-col'>
                      <span className='text-[11px] font-[600] md:text-[16px]'>
                        {item.title}
                      </span>
                      <div className='flex'>
                        <span className='text-[9px] text-[#797D8C] md:text-[12px]'>
                          {formattedDate(item.start)},
                        </span>
                        <span className='text-[9px] text-[#797D8C] md:text-[12px]'>
                          {formattedTime(item.start)}
                        </span>
                      </div>
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
                ) : null
              )}
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
