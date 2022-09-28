import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../apiActions";

const swaphistory = createSlice({
  name: "swap_history",
  initialState: {
    loading: false,
    swapHistory: [],
  },
  reducers: {
    swapHistoryRequested: (state) => {
      localStorage.getItem("token")
        ? (state.loading = true)
        : (state.loading = false);
    },
    swapHistoryReceived: (state, action) => {
      state.loading = false;
      state.swapHistory = action.payload;
    //   alert(action.payload.response.data.detail);
      console.log("Swap: ", state.swapHistory);
      
    },
    swapHistoryRequestFailed: (state, action) => {
      state.loading = false;
      alert(action.payload.response.data.detail);
    },
  },
});

const { swapHistoryRequested, swapHistoryReceived, swapHistoryRequestFailed } =
  swaphistory.actions;

export const swapHistoryAction = () => {
  let auth = JSON.parse(localStorage.getItem("token"));
  auth = auth.access_token;

  return apiCallBegan({
    onStart: swapHistoryRequested.type,
    onSuccess: swapHistoryReceived.type,
    onError: swapHistoryRequestFailed.type,
    auth: auth,
    url: "/swap",
    method: "GET",
  });
};

export default swaphistory.reducer;
