import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      if (email === "abdelmonemramadan9@gmail.com" && password === "admin123") {
        state.isAuthenticated = true;
        state.admin = { email };
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.admin = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
