import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUsers = createAsyncThunk(
  "users/create",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post("http://localhost:8080/api/v1/register", data);
      console.log(res)
      localStorage.setItem('users',JSON.stringify(res))
      return res.toString();
      
    } catch (error) {
      const message =
        (error && error.data && error.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createUserLogin = createAsyncThunk(
  "users/createLogin",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post("http://localhost:8080/api/v1/login", data);
      console.log(res)
      localStorage.setItem('users',JSON.stringify(res))
      return res.toString();
      
    } catch (error) {
      const message =
        (error && error.data && error.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);



export const userSlice = createSlice({
  name: "users",
  initialState: {
  users: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder
        .addCase(createUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = [state.users,action.payload];
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(createUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
         .addCase(createUserLogin.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createUserLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = [state.users,action.payload];
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(createUserLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export default userSlice.reducer;
