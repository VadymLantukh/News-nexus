import { createSlice } from "@reduxjs/toolkit";
import { searchNewsThunk } from "./operations";

const initialState = {
  filterNews: [],
  isLoading: false,
  isError: false,
};

export const filterNews = createSlice({
  name: "filter",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(searchNewsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchNewsThunk.fulfilled, (state, action) => {
        state.filterNews = [...state.filterNews, ...action.payload];
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(searchNewsThunk.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});

export const filterReducer = filterNews.reducer;
