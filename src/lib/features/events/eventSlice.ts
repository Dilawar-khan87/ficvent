import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface EventItem {
  id: string
  title: string
  description: string
  category: string
  labels: string[]
  rank: number
  entities: {
    entity_id: string
    name: string
    type: string
    category: string
    labels: string[]
  }[]
  duration: number
  start: string
  end: string
  updated: string
  first_seen: string
  timezone: string | null
  location: [number, number]
  scope: string
  country: string
  state: string
  brand_safe: boolean
  private: boolean
}

const initialState: EventItem[] = []

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvents(state, action: PayloadAction<EventItem[]>) {
      state.push(...action.payload)
    },
    removeEvent(state, action: PayloadAction<string>) {
      return state.filter((item) => item.id !== action.payload)
    },
    updateEvent(
      state,
      action: PayloadAction<{ id: string; updatedItem: EventItem }>
    ) {
      const { id, updatedItem } = action.payload
      const index = state.findIndex((item) => item.id === id)
      if (index !== -1) {
        state[index] = updatedItem
      }
    },
  },
})

export const { addEvents, removeEvent, updateEvent } = eventSlice.actions
export default eventSlice.reducer
