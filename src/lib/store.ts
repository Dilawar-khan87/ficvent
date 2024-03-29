import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/lib/features/counter/counterSlice'
import eventReducer from '@/lib/features/events/eventSlice'
import menuReducer from './features/menu/menuSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      events: eventReducer,
      menu: menuReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
