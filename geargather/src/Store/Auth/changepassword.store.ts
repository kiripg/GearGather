import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  changePasswordSuccess: false,
  error: null,
};

const passwordSlice = createSlice({
  name: "Password",
  initialState: initialState,
  reducers: {
    changePasswordAction: (state) => {
      state.loading = true;
      state.error = null;
      state.changePasswordSuccess = false;
    },
    changePasswordSuccessAction: (state) => {
      state.loading = false;
      state.error = null;
      state.changePasswordSuccess = true;
    },
    changePasswordFailure: (state, action) => {
      state.loading = false;
      state.changePasswordSuccess = false;
      state.error = action.payload;
    },
    resetPasswordState: () => initialState,
  },
});

export const {
  changePasswordAction,
  changePasswordFailure,
  changePasswordSuccessAction,
  resetPasswordState,
} = passwordSlice.actions;

export default passwordSlice.reducer;
