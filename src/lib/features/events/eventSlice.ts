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

interface EventState {
  all: EventItem[]
  favorites: EventItem[]
}

const initialState: EventState = {
  all: [],
  favorites: [],
}

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvents(state, action: PayloadAction<EventItem[]>) {
      state.all = action.payload
    },
    addFavoriteEvent(state, action: PayloadAction<EventItem>) {
      state.favorites.push(action.payload)
    },
    removeFavEvent(state, action: PayloadAction<{ id: string }>) {
      const idToRemove = action.payload.id
      const updatedFavorites = state.favorites.filter(
        (event) => event.id !== idToRemove
      )
      state.favorites = updatedFavorites
    },
    updateEvent(
      state,
      action: PayloadAction<{ id: string; updatedItem: EventItem }>
    ) {
      const { id, updatedItem } = action.payload
      const index = state.all.findIndex((item) => item.id === id)
      if (index !== -1) {
        state.all[index] = updatedItem
      }
    },
  },
})

export const { addEvents, updateEvent, addFavoriteEvent, removeFavEvent } =
  eventSlice.actions
export default eventSlice.reducer
