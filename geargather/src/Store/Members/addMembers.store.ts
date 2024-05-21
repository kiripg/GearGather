import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const slice = createSlice({
  name: "addMember",
  initialState: initialState,
  reducers: {
    addMemberAction: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },

    addMemberSuccess: (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },

    addMemberError: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    resetAddMembers: () => initialState,
  },
});

export const {
  addMemberAction,
  addMemberError,
  addMemberSuccess,
  resetAddMembers,
} = slice.actions;

export default slice.reducer;
