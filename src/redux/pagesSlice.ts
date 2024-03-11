import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

interface PagesState {
  selectedFolder?: string
  selectedPage?: string
}

const initialState: PagesState = {
  selectedFolder: undefined,
  selectedPage: undefined,
}

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setSelectedFolder: (state, action: PayloadAction<string | undefined>) => {
      state.selectedFolder = action.payload
    },
    setSelectedPage: (state, action: PayloadAction<string | undefined>) => {
      state.selectedPage = action.payload
    },
  },
})

export const { setSelectedFolder, setSelectedPage } = pagesSlice.actions

export const selectIsSelectedFolder = (folder: string) => (state: RootState) =>
  state.pages.selectedFolder === folder

export const selectIsSelectedPage = (page: string) => (state: RootState) =>
  state.pages.selectedPage === page

export const pagesReducer = pagesSlice.reducer
