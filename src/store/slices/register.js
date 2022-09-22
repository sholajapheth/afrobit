import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../apiActions";


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

        },
        registerRequestFailed: (state) => {
            state.loading = false;
            state.loggedIn = false;
            alert("Registeration Failed");
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