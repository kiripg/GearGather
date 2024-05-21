import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
  treasuries: null,
};

const slice = createSlice({
  name: "allTreasuries",
  initialState: initialState,
  reducers: {
    treasuriesRequestAction: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
      state.treasuries = null;
    },

    treasuriesSucess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.treasuries = action.payload;
      state.error = null;
    },

    treasuriesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
      state.treasuries = null;
    },

    treasuryResetState: () => initialState,
  },
});

export const {
  treasuriesRequestAction,
  treasuriesError,
  treasuriesSucess,
  treasuryResetState,
} = slice.actions;

export default slice.reducer;
