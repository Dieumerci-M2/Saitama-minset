import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getPost = createAsyncThunk(
  "training/get",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/fetch");
      return res.data;
    } catch (error) {
      const message =
        (error && error.data && error.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);



export const TrainingSlice = createSlice({
  name: "training",
  initialState: {
    trainining: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trainining = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
  },
});

export default TrainingSlice.reducer;
