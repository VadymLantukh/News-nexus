import { createSlice } from "@reduxjs/toolkit";
import { fetchNewsThunk } from "./operations";

const initialState = {
  newsItems: [],
  isLoading: false,
  isError: false,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNewsThunk.fulfilled, (state, action) => {
        state.newsItems = action.payload;
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(fetchNewsThunk.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});

export const newsReducer = newsSlice.reducer;
