import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//========== Get Course ============
export const getCourse = createAsyncThunk(
  "course/getCourse",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/course/courses"
      );
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Course Not Found!";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const CourseSlice = createSlice({
  name: "Course",
  initialState: {
    error: null,
    course: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.course = action.payload;
      })
      .addCase(getCourse.rejected, (state, action) => {
        state.loading = false;
        state.course = [];
        state.error = action.payload || "Course Not Found";
      });
  },
});

export default CourseSlice.reducer;
