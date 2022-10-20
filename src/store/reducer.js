import { combineReducers } from "redux";
import login from "./slices/login";
import register from "./slices/register";
import swap_history from "./slices/swaphistory";
import createSwap from "./slices/createSwap";
import create_spot from "./slices/createSpotOrder";

export default combineReducers({
  login,
  register,
  swap_history,
  createSwap,
  create_spot,
});
