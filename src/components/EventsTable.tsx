import Image from 'next/image'
import EventModal from './EventModal'
import axiosInstance from '@/config/axiosConfig'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import {
  addEvents,
  addFavoriteEvent,
  removeFavEvent,
} from '@/lib/features/events/eventSlice'
import { useEffect } from 'react'
import { formattedDate, formattedTime } from '@/utils/date-time'

export default function EventsTable() {
  const dispatch = useAppDispatch()
  const events = useAppSelector((state) => state.events.all)
  const favEvents = useAppSelector((state) => state.events.favorites)

  useEffect(() => {
    axiosInstance
      .get('/events')
      .then((data) => {
        // console.log(data.data.results)
        dispatch(addEvents(data.data.results))
      })
      .catch((err) => {
        console.log(err)
      })
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className='flex justify-between border-b border-[#6A6A6A]'>
        <span className='px-6 py-4'>#</span>
        <span className='w-56 px-6 py-4 '>NAME</span>
        <span className='px-6 py-4'>TIME</span>
        <span className='px-6 py-4'>DATE</span>
        <span className='px-6 py-4'>LOCATION</span>
        <span className='px-6 py-4'>
          <span className='h-4 w-4 p-5'></span>
        </span>
      </div>
      <div className='flex w-full flex-col'>
        {events.length <= 0 ? (
          <div className='flex justify-center'>
            <div className='h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-blue-600' />
          </div>
        ) : (
          events.map((item, index) => (
            <EventModal key={item.id} item={item}>
              <div className='p-4'>{1 + index}</div>
              <div className='w-56 p-4'>{item.title.slice(0, 20)}...</div>
              <div className='p-4'>{formattedTime(item.start)}</div>
              <div className='p-4'>{formattedDate(item.start)}</div>
              <div className='p-4'>{item.country}</div>
              <div className='p-4'>
                <button
                  className='flex items-center justify-center rounded-full p-2 hover:bg-[#ECEAFF]'
                  onClick={() => {
                    if (!favEvents.some((event) => event.id === item.id)) {
                      dispatch(addFavoriteEvent(item))
                    } else {
                      dispatch(removeFavEvent({ id: item.id }))
                    }
                  }}
                >
                  <Image
                    src={
                      favEvents.some((event) => event.id === item.id)
                        ? '/assets/icons/heart-solid-red.svg'
                        : '/assets/icons/heart-purple.svg'
                    }
                    alt='Favorite Event'
                    width={18}
                    height={18}
                  />
                </button>
              </div>
            </EventModal>
          ))
        )}
      </div>
    </div>
  )
}
