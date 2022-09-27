import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userName: "",
    image: "",
  },
  reducers: {
    getProfileName: (state, action) => {
      state.userName = action.payload;
    },
    getProfileImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { getProfileImage, getProfileName } = profileSlice.actions;
export default profileSlice.reducer;
