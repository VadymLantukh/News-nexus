import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchNewsThunk = createAsyncThunk(
  "news/searchNews",
  async (query, thunkAPI) => {
    try {
      const { data } = await axios.get("/v2/top-headlines", {
        params: {
          q: query,
        },
      });
      return data.articles; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
