// src/features/ui/uiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  globalLoading: false,
  notificationsCount: 0,
  sidebarOpen: typeof window !== "undefined" ? (window.innerWidth >= 1024) : true, // open by default on large screens
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
    setNotifications: (state, action) => {
      state.notificationsCount = Number(action.payload) || 0;
    },
    incrementNotification: (state) => {
      state.notificationsCount = (state.notificationsCount || 0) + 1;
    },
    clearNotifications: (state) => {
      state.notificationsCount = 0;
    },

    // Sidebar controls
    openSidebar: (state) => {
      state.sidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebar: (state, action) => {
      state.sidebarOpen = !!action.payload;
    },
  },
});

export const {
  showLoading,
  hideLoading,
  setNotifications,
  incrementNotification,
  clearNotifications,
  openSidebar,
  closeSidebar,
  toggleSidebar,
  setSidebar,
} = uiSlice.actions;

export default uiSlice.reducer;
