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
            <table className='w-full p-4 text-left text-sm rtl:text-right'>
              <thead className='text-xs uppercase'>
                <tr>
                  <th>#</th>
                  <th>NAME</th>
                  <th>TIME</th>
                  <th>DATE</th>
                  <th>LOCATION</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item} className=' bg-[#F3F3F3]'>
                    <td className='rounded-l-2xl px-6 py-4'>{item}</td>
                    <td className='px-6 py-4'>NAME</td>
                    <td className='px-6 py-4'>TIME</td>
                    <td className='px-6 py-4'>DATE</td>
                    <td className='rounded-r-2xl px-6 py-4'>LOCATION</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
