import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createPaiment = createAsyncThunk(
  "paiement/create",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post("https://api.blockcypher.com/{{API_VERSION}}/{{COIN}}/{{CHAIN}}/txs/send?token={{TOKEN}}", data);
      return res;
    } catch (error) {
      const message =
        (error && error.data && error.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);





export const PaiementSlice  = createSlice({
  name: "paiement",
  initialState: {
    paiement: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(createPaiment.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createPaiment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projets = [...state.projects,action.payload];
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(createPaiment.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export default PaiementSlice.reducer;
