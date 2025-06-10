import { configureStore } from "@reduxjs/toolkit";
import isLikedSlice from "./isLikedSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: { like: isLikedSlice.reducer, user: userSlice.reducer },
});

export default store;
