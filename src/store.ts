import { configureStore } from '@reduxjs/toolkit'

import ApartmentReducer from '@/reducers/apartment'

export function makeStore() {
  return configureStore({
    reducer: { apartments: ApartmentReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
  