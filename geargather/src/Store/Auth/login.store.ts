import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  loginSuccess: false,
  error: null,
};

const slice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    loginAction: (state) => {
      state.loading = true;
      state.error = null;
    },

    loginSucessAction: (state) => {
      state.loading = true;
      state.error = null;
      state.loginSuccess = true;
    },
    loginErrorAction: (state, action) => {
      state.loading = false;
      state.loginSuccess = false;
      state.error = action.payload;
    },

    loginResetState: () => initialState,
  },
});

export const {
  loginAction,
  loginSucessAction,
  loginErrorAction,
  loginResetState,
} = slice.actions;

export default slice.reducer;
