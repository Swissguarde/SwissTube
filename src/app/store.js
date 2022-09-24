import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../features/navSlice";
import categoryReducer from "../features/categorySlice";
import { youtubeApi } from "../services/youtubeApi";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    category: categoryReducer,
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },
});
