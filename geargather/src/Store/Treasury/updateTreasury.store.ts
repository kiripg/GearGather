import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  updateSuccess: false,
  error: null,
};

const slice = createSlice({
  name: "updateTreasury",
  initialState: initialState,
  reducers: {
    updateTreasuryAction: (state) => {
      state.loading = true;
      state.updateSuccess = false;
      state.error = null;
    },
    updateTreasurySuccess: (state) => {
      state.loading = false;
      state.updateSuccess = true;
      state.error = null;
    },
    updateTreasuryFail: (state, action) => {
      state.loading = false;
      state.updateSuccess = false;
      state.error = action.payload;
    },
    resetUpdateTreasury: () => initialState,
  },
});

export const {
  updateTreasuryAction,
  updateTreasuryFail,
  updateTreasurySuccess,
  resetUpdateTreasury,
} = slice.actions;

export default slice.reducer;
