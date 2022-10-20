import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../apiActions";

const createSwap = createSlice({
  name: "create_swap",
  initialState: {
    loading: false,
    swapCreated: false,
    swapData: null,
  },
  reducers: {
    createSwapRequested: (state) => {
      state.loading = true;
    },
    createSwapReceived: (state, action) => {
      state.loading = false;
      state.swapCreated = true;
      state.swapData = action.payload;
      alert("Swap Created");
    },
    createSwapRequestFailed: (state, action) => {
      state.loading = false;
      state.swapCreated = false;
      alert("Swap Creation Failed");
    },
  },
});

const { createSwapRequested, createSwapReceived, createSwapRequestFailed } =
  createSwap.actions;

export const createSwapAction = (data) => {
   let auth = JSON.parse(localStorage.getItem("token"));
   auth = auth.access_token;
  return apiCallBegan({
    onStart: createSwapRequested.type,
    onSuccess: createSwapReceived.type,
    onError: createSwapRequestFailed.type,
    auth: auth,
    data,
    url: "/swap",
    method: "POST",
  });
};

export default createSwap.reducer;
