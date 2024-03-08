import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ScreenState {
  showMobileLayout: boolean
  showNavigationMenu: boolean
}

const initialState: ScreenState = {
  showMobileLayout: false,
  showNavigationMenu: false,
}

export const screenSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setShowMobileLayout: (state, action: PayloadAction<boolean>) => {
      state.showMobileLayout = action.payload
    },
    setShowNavigationMenu: (state, action: PayloadAction<boolean>) => {
      state.showNavigationMenu = action.payload
    },
  },
})

export const { setShowMobileLayout, setShowNavigationMenu } =
  screenSlice.actions

export const screenReducer = screenSlice.reducer
