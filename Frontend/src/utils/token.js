// src/utils/token.js

// ✅ Save token securely
export const setToken = (token) => {
  if (token) localStorage.setItem("token", token);
};

// ✅ Get token when needed
export const getToken = () => localStorage.getItem("token");

// ✅ Remove token on logout or expiry
export const removeToken = () => localStorage.removeItem("token");
