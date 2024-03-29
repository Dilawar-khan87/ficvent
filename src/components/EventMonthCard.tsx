import Image from 'next/image'

export default function EventMonthCard() {
  return (
    <div
      className='w-full rounded-3xl bg-[#5041BC] p-6'
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
  )
}
