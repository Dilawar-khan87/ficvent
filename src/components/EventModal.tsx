'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { formattedDate, formattedTime } from '@/utils/date-time'
import Image from 'next/image'
import { useState } from 'react'

export default function EventModal({
  children,
  item,
}: {
  children: React.ReactNode
  item: any
}) {
  let [isOpen, setIsOpen] = useState(false)

  function openModal(e: any) {
    if (e.target.tagName.toLowerCase() !== 'img' && 'button') {
      setIsOpen(!isOpen)
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <div
        role='button'
        className='mr-2 mt-4 flex items-center justify-between rounded-xl border border-[#F3F3F3] bg-white'
        onClick={openModal}
      >
        {children}
      </div>
      <DialogContent>
        <div className='flex w-full justify-between'>
          <span className='text-[16px] font-bold text-[#1E232A]'>
            Title: {item.title.slice(0, 10)}...
          </span>
          <div className='flex pr-4'>
            <span className='text-[12px] font-bold text-[#797D8C]'>
              {formattedDate(item.start)}
            </span>
            <span className='pl-2 text-[12px] font-bold text-[#797D8C]'>
              {formattedTime(item.start)}
            </span>
          </div>
        </div>

        <span className='text-[12px] font-[500] text-[#797D8C]'>
          Category: {item.category}
        </span>
        <span className='text-[12px] font-[500]'>Description: </span>
        <span className='text-[10px] font-[400] text-[#9E9E9E]'>
          Description:{item.description}
        </span>
        <div className='flex-grow border-t border-gray-300'></div>

        <div className=' flex justify-center border-red-500'>
          <Image
            src='/assets/icons/location.svg'
            width={18}
            height={18}
            alt='Location'
          />
          <span className='pl-1 text-[14px] text-[#797D8C]'>
            Bahria Intellectual Village
          </span>
        </div>
      </DialogContent>
    </Dialog>
  )
}
