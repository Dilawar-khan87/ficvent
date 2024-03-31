'use client'

import EventModal from '@/components/EventModal'
import { addFavoriteEvent } from '@/lib/features/events/eventSlice'
import { useAppDispatch, useAppSelector, useAppStore } from '@/lib/hooks'
import { formattedDate, formattedTime } from '@/utils/date-time'
import Image from 'next/image'
import React from 'react'

function FavoriteEvents() {
  // const favEvents = useAppSelector((state) => state.events.favorites)
  const favoriteEvents = useAppSelector((state) => state.events.favorites)

  const dispatch = useAppDispatch()

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
          {favoriteEvents.map((item, index) => (
            <EventModal key={item.id} item={item}>
              <span className='mx-6 my-4'>{index}</span>
              <span className='mx-6 my-4'>{item.title.slice(0, 20)}</span>
              <span className='mx-6 my-4'>{formattedTime(item.start)}</span>
              <span className='mx-6 my-4'>{formattedDate(item.start)}</span>
              <span className='mx-6 my-4'>{item.country}</span>
              <div className='mx-6 my-4'>
                <button
                  className='flex items-center justify-center rounded-full p-2 hover:bg-[#ECEAFF]'
                  onClick={() => {
                    dispatch(addFavoriteEvent(item))
                  }}
                >
                  <Image
                    src={'/assets/icons/heart-solid-red.svg'}
                    alt='Favorite Event'
                    width={18}
                    height={18}
                  />
                </button>
              </div>
            </EventModal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FavoriteEvents
