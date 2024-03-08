import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ScreenState {
  showMobileLayout: boolean
}

const initialState: ScreenState = {
  showMobileLayout: false,
}

export const screenSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setShowMobileLayout: (state, action: PayloadAction<boolean>) => {
      state.showMobileLayout = action.payload
    },
  },
})

export const { setShowMobileLayout } = screenSlice.actions

export const screenReducer = screenSlice.reducer
