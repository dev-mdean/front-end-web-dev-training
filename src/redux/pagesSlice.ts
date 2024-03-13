import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Page } from '../pages'

interface PagesState {
  selectedPage?: Page
}

const initialState: PagesState = {
  selectedPage: undefined,
}

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setSelectedPage: (state, action: PayloadAction<Page | undefined>) => {
      state.selectedPage = action.payload
    },
  },
})

export const { setSelectedPage } = pagesSlice.actions

export const selectIsSelectedPage = (page: Page) => (state: RootState) =>
  state.pages.selectedPage === page

export const pagesReducer = pagesSlice.reducer
