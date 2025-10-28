import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  globalLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.globalLoading = true;
    },
    hideLoading: (state) => {
      state.globalLoading = false;
    },
  },
});

export const { showLoading, hideLoading } = uiSlice.actions;
export default uiSlice.reducer;
