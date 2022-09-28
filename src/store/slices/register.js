import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { apiCallBegan } from "../apiActions";

const navigate = useNavigate;

const register = createSlice({
    name: "register",
    initialState: {},
    loading: false,
    reducers: {
        registerRequested: (state) => {
            state.loading = true;
        },
        registerReceived: (state, action) => {
            state.loading = false;
            state.loggedIn = true;
            alert("Registeration Successful");
            localStorage.setItem("token", action.payload);
            navigate("/assets");

        },
        registerRequestFailed: (state, action) => {
            state.loading = false;
            state.loggedIn = false;
            alert("Registeration Failed");
            alert(action.payload.response.data.detail);
        },
    },
});

const { registerRequested, registerReceived, registerRequestFailed } = register.actions;

export const registerAction = (data) => apiCallBegan({
    onStart: registerRequested.type,
    onSuccess: registerReceived.type,
    onError: registerRequestFailed.type,
    data,
    url: "/auth/register",
    method: "POST",
})

export default register.reducer;