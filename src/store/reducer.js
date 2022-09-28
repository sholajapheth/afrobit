import { combineReducers } from "redux";
import login from "./slices/login";
import register from "./slices/register";
import swap_history from "./slices/swaphistory";

export default combineReducers({
 login,
 register,
 swap_history
});
