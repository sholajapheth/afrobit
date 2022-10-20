import { apiCallBegan } from "../apiActions";
import { createSlice } from "@reduxjs/toolkit";

const create_spot = createSlice({
  name: "create_spot",
  initialState: {
    loading: false,
    spot_created: false,
    spot_data: null,
  },

  reducers: {
    create_spot_requested: (state) => {
      state.loading = true;
    },

    create_spot_received: (state, action) => {
      state.loading = false;
      state.spot_created = true;
      state.spot_data = action.payload;
      alert("Spot Created");
    },

    create_spot_request_failed: (state, action) => {
      state.loading = false;
      state.spot_created = false;
      alert("Spot Creation Failed");
    },
  },
});

const {
  create_spot_requested,
  create_spot_received,
  create_spot_request_failed,
} = create_spot.actions;

export const create_spot_order_action = (data) => {
  let auth = JSON.parse(localStorage.getItem("token"));
  auth = auth.access_token;
  return apiCallBegan({
    onStart: create_spot_requested.type,
    onSuccess: create_spot_received.type,
    onError: create_spot_request_failed.type,
    auth: auth,
    data,
    url: "trade/orders/spot",
    method: "POST",
  });
};

export default create_spot.reducer;

