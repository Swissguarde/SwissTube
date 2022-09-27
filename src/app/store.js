import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../features/navSlice";
import categoryReducer from "../features/categorySlice";
import profileReducer from "../features/profileSlice";
import { youtubeApi } from "../services/youtubeApi";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    category: categoryReducer,
    profile: profileReducer,
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtubeApi.middleware),
});
