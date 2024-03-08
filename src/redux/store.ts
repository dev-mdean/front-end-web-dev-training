import { configureStore } from "@reduxjs/toolkit";
import { pagesReducer } from "./pagesSlice";

export const AppStore = configureStore({
  reducer: {
    pages: pagesReducer
  }
})

export type RootState = ReturnType<typeof AppStore.getState>
export type AppDispatch = typeof AppStore.dispatch;