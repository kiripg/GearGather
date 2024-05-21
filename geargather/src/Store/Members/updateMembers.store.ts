import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  updateSuccess: false,
  error: null,
};

const slice = createSlice({
  name: "updateMembers",
  initialState: initialState,
  reducers: {
    updateMembersAction: (state) => {
      state.loading = true;
      state.updateSuccess = false;
      state.error = null;
    },
    updateMembersSuccess: (state) => {
      state.loading = false;
      state.updateSuccess = true;
      state.error = null;
    },
    updateMembersFail: (state, action) => {
      state.loading = false;
      state.updateSuccess = false;
      state.error = action.payload;
    },
    resetUpdateMembers: () => initialState,
  },
});

export const {
  updateMembersAction,
  updateMembersFail,
  updateMembersSuccess,
  resetUpdateMembers,
} = slice.actions;

export default slice.reducer;
