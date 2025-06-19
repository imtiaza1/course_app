import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

// ========== Create User ==========
export const createUser = createAsyncThunk(
  "auth/createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        data
      );
      return response.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        "Signup failed";
      return rejectWithValue(message);
    }
  }
);

// ========== Login User ==========
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        data,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        "Login failed";
      return rejectWithValue(message);
    }
  }
);

// ========== Initial State ==========
const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  loading: false,
  error: false,
  success: false,
};

// ========== Slice ==========
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.success = false;
      state.error = false;
      Cookies.remove("token");
      localStorage.removeItem("user");
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
  },
  extraReducers: (builder) => {
    // ===== Signup =====
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Signup failed";
      });

    // ===== Login =====
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
        state.user = action.payload.user;

        // ✅ Save user & token
        if (action.payload?.user) {
          localStorage.setItem("user", JSON.stringify(action.payload.user));
        }
        if (action.payload?.token) {
          Cookies.set("token", action.payload.token, { expires: 7 });
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Login failed";
        state.user = null;
      });
  },
});

// ========== Export ==========
export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
