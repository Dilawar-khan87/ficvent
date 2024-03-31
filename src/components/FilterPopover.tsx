import Image from 'next/image'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import axiosInstance from '@/config/axiosConfig'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { addEvents } from '@/lib/features/events/eventSlice'

function DateTimeRangePicker() {
  const dispatch = useAppDispatch()
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [mode, setMode] = useState('start')
  const [startTime, setStartTime] = useState<string>('1')
  const [endTime, setEndTime] = useState<string>('24')
  const [calendarOpen, setCalendarOpen] = useState(false)

  const hours = []

  for (let i = 1; i <= 24; i++) {
    hours.push(i)
  }

  function formatDate(date: Date) {
    const year = date?.getFullYear()
    const month = String(date?.getMonth() + 1).padStart(2, '0')
    const day = String(date?.getDate()).padStart(2, '0')

    const formattedDate = `${year}-${month}-${day}`

    return formattedDate
  }

  function formatHour(hour: number) {
    if (hour >= 12) {
      if (hour < 22) {
        return `0${hour - 12}am`
      } else {
        return `${hour - 12}am`
      }
    } else {
      if (hour < 10) {
        return `0${hour}pm`
      } else {
        return `${hour}pm`
      }
    }
  }
  const applyFilter = () => {
    console.log('startDate', formatDate(startDate))
    console.log('endDate', formatDate(endDate))
    console.log('startTime', startTime)
    console.log('endTime', endTime)
    axiosInstance
      .get(
        `/events?active.gte=${formatDate(startDate)}T${parseInt(startTime, 10) < 10 ? '0' : ''}:00:00&active.lte=${formatDate(endDate)}T${endTime}:00:00`
      )
      .then((data) => {
        // console.log(data.data.results)
        dispatch(addEvents(data.data.results))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    applyFilter()
    // T${startTime}:00:00
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate, startTime, endTime])

  return (
    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
      <div className='mt-2 flex flex-col gap-4 md:flex-row'>
        <div className='flex rounded-md bg-[#EDEDED]'>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-[240px] justify-start bg-[#EDEDED] text-left font-normal',
                !startDate && 'text-muted-foreground'
              )}
              onClick={() => setMode('start')}
            >
              <CalendarIcon className='mr-2 h-4 w-4' />
              {startDate ? format(startDate, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <div className='my-2 w-[2px] bg-black'></div>
          <Select
            onValueChange={(e: string) => setStartTime(e)}
            defaultValue={startTime}
            // className='bg-[#EDEDED]'
          >
            <SelectTrigger className='bg-[#EDEDED] focus:outline-none focus:ring-0'>
              <SelectValue placeholder='Select a category' />
            </SelectTrigger>
            <SelectContent>
              {hours.map((hour) => (
                <SelectItem value={`${hour}`} key={hour}>
                  {formatHour(hour)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='flex rounded-md bg-[#EDEDED]'>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-[240px] justify-start bg-[#EDEDED] text-left font-normal',
                !endDate && 'text-muted-foreground'
              )}
              onClick={() => setMode('end')}
            >
              <CalendarIcon className='mr-2 h-4 w-4' />
              {endDate ? format(endDate, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <div className='my-2 w-[2px] bg-black'></div>
          <Select
            onValueChange={setEndTime}
            defaultValue={endTime}
            // className='bg-[#EDEDED]'
          >
            <SelectTrigger className='bg-[#EDEDED] focus:outline-none focus:ring-0'>
              <SelectValue placeholder='Select a category' />
            </SelectTrigger>
            <SelectContent>
              {hours.map((hour) => (
                <SelectItem value={`${hour}`} key={hour}>
                  {formatHour(hour)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <PopoverContent className='p-0' align='start'>
        <Calendar
          mode='single'
          selected={mode === 'start' ? startDate : endDate}
          onSelect={(value: any) => {
            setCalendarOpen(false)
            if (mode === 'start') {
              setStartDate(new Date(value))
            } else {
              setEndDate(new Date(value))
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default function FilterPopover() {
  const categories = [
    {
      id: 'academic',
    },
    {
      id: 'school-holidays',
    },
    {
      id: 'public-holidays',
    },
    {
      id: 'observances',
    },
    {
      id: 'politics',
    },
    {
      id: 'conferences',
    },
    {
      id: 'expos',
    },
    {
      id: 'concerts',
    },
    {
      id: 'festivals',
    },
    {
      id: 'performing-arts',
    },
    {
      id: 'sports',
    },
    {
      id: 'community',
    },
    {
      id: 'daylight-savings',
    },
    {
      id: 'airport-delays',
    },

    {
      id: 'severe-weather',
    },
    {
      id: 'disasters',
    },
    {
      id: 'terror',
    },
    {
      id: 'health-warnings',
    },
    {
      id: 'public',
    },
  ]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className='mr-2 flex h-10 w-10 items-center justify-center shadow-lg shadow-[#5041BC]/30'>
          <Image
            src='/assets/icons/menu.svg'
            alt='Menu'
            width={20}
            height={20}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className='w-full' align='end'>
        <div className='w-full md:w-[calc(50%-1rem)]'>
          <label>Category</label>
          <Select
            onValueChange={(e: any) => {
              console.log('Event', e)
            }}
            defaultValue='community'
          >
            <SelectTrigger className='mt-2 focus:outline-none focus:ring-0'>
              <SelectValue placeholder='Select a category' />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem value={category.id} key={category.id}>
                  {category.id
                    .replace('-', ' ')
                    .replace(/\b\w/g, function (char) {
                      return char.toUpperCase()
                    })}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='mt-4'>
          <label>Date & Time</label>
          <DateTimeRangePicker />
        </div>
      </PopoverContent>
    </Popover>
  )
}
