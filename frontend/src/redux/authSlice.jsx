import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// create user
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const api = await axios.post(
      "http://localhost:4000/api/v1/course/create",
      data
    );
    try {
      const result = await api.data;
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// initialState
const initialState = {
  user: null,
  loading: false,
  error: false,
  success: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = "Signup successful";
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.success = false;
        state.error = action.payload || "Signup failed";
      });
  },
});

// Action creators are generated for each case reducer function
export const { signUp } = authSlice.actions;

export default authSlice.reducer;
