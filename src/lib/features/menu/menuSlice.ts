import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MenuState {
  isOpen: boolean
}

const initialState: MenuState = {
  isOpen: false,
}

const eventSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isOpen = !state.isOpen
    },
  },
})

export const { toggleMenu } = eventSlice.actions
export default eventSlice.reducer
