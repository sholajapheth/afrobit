import { combineReducers } from "redux";
import login from "./slices/login";
import swap_history from "./slices/swaphistory";

export default combineReducers({
 login,
 swap_history
});
