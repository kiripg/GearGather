import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  logoutSuccess: false,
  error: null,
};

const slice = createSlice({
  name: "logout",
  initialState: initialState,
  reducers: {
    logoutAction: (state) => {
      state.loading = true;
      state.error = null;
    },
    logOutSucessAction: (state) => {
      state.loading = true;
      state.error = null;
      state.logoutSuccess = true;
    },
    logOutErrorAction: (state, action) => {
      state.loading = false;
      state.logoutSuccess = false;
      state.error = action.payload;
    },
    logoutResetState: () => initialState,
  },
});

export const {
  logoutAction,
  logOutSucessAction,
  logOutErrorAction,
  logoutResetState,
} = slice.actions;

export default slice.reducer;
