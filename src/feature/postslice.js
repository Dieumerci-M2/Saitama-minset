import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getOnePost = createAsyncThunk(
  "blogs/getOne",
  async (titleName, thunkAPI) => {
    try {
      const res = await axios.get(`http://localhost:8080/api/v1/title?titre=${titleName}`);
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


export const PostSlice = createSlice({
  name: "post",
  initialState: {
    post: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder
     .addCase(getOnePost.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getOnePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.post = action.payload;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getOnePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

  },
});

export default PostSlice.reducer;
