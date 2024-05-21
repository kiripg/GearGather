import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  infosuccess: false,
  error: null,
};

const infoFormSlice = createSlice({
  name: "infoForm",
  initialState: initialState,
  reducers: {
    infoFormAction: (state) => {
      state.loading = true
      state.error = null
      state.infosuccess = false
    },
    infoFormActionSuccess: (state) => {
      state.loading = false
      state.error = null
      state.infosuccess = true
    },
    infoFormActionFail: (state, action) => {
      state.loading = false
      state.infosuccess = false
      state.error = action.payload
    },
    resetInfoForm: () => initialState,
  },
});

export const {
  infoFormAction,
  infoFormActionFail,
  infoFormActionSuccess,
  resetInfoForm,
} = infoFormSlice.actions;

export default infoFormSlice.reducer;
