import { apiCallBegan } from "../apiActions";
import { createSlice } from "@reduxjs/toolkit";

const create_margin_order = createSlice({
    name: "create_margin_order",
    initialState: {
        loading: false,
        margin_order_created: false,
        margin_order_data: null,
    },

    reducers: {
        create_margin_order_requested: (state) => {
            state.loading = true;
        }
        , create_margin_order_received: (state, action) => {
            state.loading = false;
            state.margin_order_created = true;
            state.margin_order_data = action.payload;
            alert("Margin Order Created");
        }
        , create_margin_order_request_failed: (state, action) => {
            state.loading = false;
            state.margin_order_created = false;
            alert("Margin Order Creation Failed");
        }
    },
});

const {
    create_margin_order_requested
    , create_margin_order_received
    , create_margin_order_request_failed
} = create_margin_order.actions;

export const create_margin_order_action = (data) => {
    let auth = JSON.parse(localStorage.getItem("token"));
    auth = auth.access_token;
    return apiCallBegan({
        onStart: create_margin_order_requested.type
        , onSuccess: create_margin_order_received.type
        , onError: create_margin_order_request_failed.type
        , auth: auth
        , data
        , url: "trade/orders/margin"
        , method: "POST"
    });
}

export default create_margin_order.reducer;