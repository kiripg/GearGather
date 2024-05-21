import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: true,
  member: false,
  calendar: false,
  treasury: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleStart: (state) => {
      state.start = true;
      state.member = false;
      state.calendar = false;
      state.treasury = false;
    },
    toggleMember: (state) => {
      state.start = false;
      state.member = true;
      state.calendar = false;
      state.treasury = false;
    },
    toggleCalendar: (state) => {
      state.start = false;
      state.calendar = true;
      state.member = false;
      state.treasury = false;
    },
    toggleTreasury: (state) => {
      state.start = false;
      state.treasury = true;
      state.member = false;
      state.calendar = false;
    },

    resetAll: () => initialState,
  },
});

export const {
  toggleStart,
  toggleMember,
  toggleCalendar,
  toggleTreasury,
  resetAll,
} = menuSlice.actions;

export default menuSlice.reducer;
