import { configureStore } from '@reduxjs/toolkit'
import { pagesReducer } from './pagesSlice'
import { screenReducer } from './screenSlice'

export const AppStore = configureStore({
  reducer: {
    pages: pagesReducer,
    screen: screenReducer,
  },
})

export type RootState = ReturnType<typeof AppStore.getState>
export type AppDispatch = typeof AppStore.dispatch
