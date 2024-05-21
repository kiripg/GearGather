import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  picture: null,
  error: null,
  loading: false,
};

const slice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    userAction: (state) => {
      state.loading = true;
      state.user = null;
      state.error = null;
    },

    userData: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      // state.picture = action.payload.profilePicture
    },

    userDataError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    userResetState: () => initialState,
  },
});

export const { userAction, userData, userDataError, userResetState } =
  slice.actions;
export default slice.reducer;
