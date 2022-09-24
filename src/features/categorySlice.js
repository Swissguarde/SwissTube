import { createSlice } from "@reduxjs/toolkit";

const switchCategory = createSlice({
  name: "category",
  initialState: {
    categoryName: "",
    searchQuery: "",
  },
  reducers: {
    selectCategory: (state, action) => {
      state.categoryName = action.payload;
      state.searchQuery = "";
    },
    searchVideo: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectCategory, searchVideo } = switchCategory.actions;
export default switchCategory.reducer;
