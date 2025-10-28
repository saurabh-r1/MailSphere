import axiosInstance from "../../services/axiosInstance";

export const loginUser = async (email, password) => {
  const response = await axiosInstance.post("/auth/login", { email, password });
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axiosInstance.post("/auth/register", userData);
  return response.data;
};

export const getProfile = async () => {
  const response = await axiosInstance.get("/auth/profile");
  return response.data;
};
