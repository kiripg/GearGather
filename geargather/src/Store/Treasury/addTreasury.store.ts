import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const slice = createSlice({
  name: "addTreasury",
  initialState: initialState,
  reducers: {
    addTreasuryAction: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    addTreasurySuccess: (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    addTreasuryError: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },

    resetAddTreasury: () => initialState,
  },
});

export const {
  addTreasuryAction,
  addTreasuryError,
  addTreasurySuccess,
  resetAddTreasury,
} = slice.actions;

export default slice.reducer;
