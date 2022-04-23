import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavMenuOpen: false,
};

const slice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleNavMenu: (state) => ({
      ...state,
      isNavMenuOpen: !state.isNavMenuOpen,
    }),
  },
});

export const { toggleNavMenu } = slice.actions;
export default slice.reducer;
