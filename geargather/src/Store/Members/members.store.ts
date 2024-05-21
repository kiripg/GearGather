import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  memberSuccess: false,
  error: null,
  members: null,
};

const slice = createSlice({
  name: "Allmembers",
  initialState: initialState,
  reducers: {
    membersRequestAction: (state) => {
      state.loading = true;
      state.memberSuccess = false;
      state.error = null;
    },

    membersSuccessAction: (state, action) => {
      state.loading = false;
      state.memberSuccess = true;
      state.error = null;
      state.members = action.payload;
    },
    memberErrorAction: (state, action) => {
      state.loading = false;
      state.memberSuccess = false;
      state.error = action.payload;
    },

    memberResetState: () => initialState,
  },
});

export const {
  membersRequestAction,
  memberResetState,
  memberErrorAction,
  membersSuccessAction,
} = slice.actions;

export default slice.reducer;
