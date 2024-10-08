import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://newsapi.org/";
axios.defaults.params = {
  apiKey: "ee33550eda354708b7682fbf8d374bb8",
  country: "us",
  pageSize: 10,
};

export const fetchNewsThunk = createAsyncThunk(
  "news/fetchTop",
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get("/v2/top-headlines", {
        params: {
          page: page,
        },
      });
      return data.articles;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
