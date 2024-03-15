import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Page } from '../pages'

interface PagesState {
  selectedFolder?: Page
  selectedFile?: Page
}

const initialState: PagesState = {
  selectedFolder: undefined,
  selectedFile: undefined,
}

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setSelected: (
      state,
      action: PayloadAction<{ file?: Page; folder?: Page }>
    ) => {
      const { file, folder } = action.payload
      state.selectedFile = file
      state.selectedFolder = folder
    },
  },
})

export const { setSelected } = pagesSlice.actions

export const selectIsSelected = (file: Page) => (state: RootState) =>
  selectIsSelectedFolder(file)(state) || selectIsSelectedFile(file)(state)

export const selectIsSelectedFolder = (folder: Page) => (state: RootState) =>
  state.pages.selectedFolder === folder

export const selectIsSelectedFile = (file: Page) => (state: RootState) =>
  state.pages.selectedFile === file || selectIsSubPageSelected(file)(state)

export const selectIsSubPageSelected = (page: Page) => (state: RootState) =>
  !!page.subPages?.some((subpage) => state.pages.selectedFile === subpage)

export const pagesReducer = pagesSlice.reducer
