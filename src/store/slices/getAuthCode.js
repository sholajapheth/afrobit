import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../apiActions";

const get_auth_code = createSlice({
  name: "get_auth_code",
  initialState: {},
  loading: false,
  reducers: {
    get_auth_codeRequested: (state) => {
      state.loading = true;
    },
    get_auth_codeReceived: (state, action) => {
      state.loading = false;
      state.loggedIn = true;
      alert("Code sent");
    },
    get_auth_codeRequestFailed: (state) => {
      state.loading = false;
      alert("Registeration Failed");
    },
  },
});

const {
  get_auth_codeRequested,
  get_auth_codeReceived,
  get_auth_codeRequestFailed,
} = get_auth_code.actions;

export const get_codeAction = (data, method) =>
  apiCallBegan({
    onStart: get_auth_codeRequested.type,
    onSuccess: get_auth_codeReceived.type,
    onError: get_auth_codeRequestFailed.type,
    data,
    url:  method !== "email" ? "/auth/send-code-verify-email" : "/auth/send-code-verify-phone",
    method: "POST",
  });





export default get_auth_code.reducer;
