import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.url = "https://api.worldnewsapi.com/";
const keyApi = "f819e0089b7e458984b8697efedc0ddd";

export const fetchNewsThunk = createAsyncThunk(
  "news/fetchTop",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/top-news", {
        params: { "x-api-key": keyApi },
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
