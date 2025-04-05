import { configureStore } from "@reduxjs/toolkit";
import isLikedSlice from "./isLikedSlice";

const store = configureStore({
  reducer: { like: isLikedSlice.reducer },
});

export default store;
