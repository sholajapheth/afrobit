import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../apiActions";

const login = createSlice({
  name: "login",
  initialState: {
    loading: false,
    loggedIn: localStorage.getItem("token") ? true : false,
    userData: localStorage.getItem("token"),
  },
  reducers: {
    loginRequested: (state) => {
      state.loading = true;
    },
    loginReceived: (state, action) => {
      state.loading = false;
      state.loggedIn = true;
      localStorage.setItem("token", JSON.stringify(action.payload));
      console.log(action.payload);
      alert("Login Successful");
    },
    loginRequestFailed: (state, action) => {
      state.loading = false;
      state.loggedIn = false;
      alert("Login Failed");
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.loggedIn = false;
      alert("Logout Successful");
      document.location.reload();
    },
  },
});

const { loginRequested, loginReceived, loginRequestFailed, logout } =
  login.actions;

export const loginAction = (data) =>
  apiCallBegan({
    onStart: loginRequested.type,
    onSuccess: loginReceived.type,
    onError: loginRequestFailed.type,
    data,
    url: "/auth/login",
    method: "POST",
  });

export const logoutAction = () => {
  return logout();
};

export default login.reducer;
