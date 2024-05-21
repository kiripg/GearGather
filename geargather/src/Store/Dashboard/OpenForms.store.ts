import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  close:true,
};

const menuSlice = createSlice({
  name: "openDialog",
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.open =true;
      state.close= false;
    },

    resetAll: () => initialState,
  },
});

export const {
  toggleOpen,
  resetAll,
} = menuSlice.actions;

export default menuSlice.reducer;
