import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const selectAllNav = (state) => state.nav;
export const { toggleNav } = navSlice.actions;
export default navSlice.reducer;
