import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PagesState {
  selectedPage?: string;
}

const initialState: PagesState = {
  selectedPage: undefined
}

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setSelectedPage: (state, action: PayloadAction<string | undefined>) => {
      state.selectedPage = action.payload;
    }
  }
})

export const {setSelectedPage} = pagesSlice.actions;

export const pagesReducer = pagesSlice.reducer;