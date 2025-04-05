import { createSlice } from "@reduxjs/toolkit";

const isLikedSlice = createSlice({
  name: "isLiked",
  initialState: { isLiked: false },
  reducers: {
    setIsLiked: (state) => {
      state.isLiked = !state.isLiked;
    },
  },
});

export const isLikedActions = isLikedSlice.actions;

export default isLikedSlice;
