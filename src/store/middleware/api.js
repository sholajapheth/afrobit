import axios from "axios";
import * as actions from "../apiActions";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    const { url, data, onSuccess, onError, onStart, method, extraheaders } =
      action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);
    try {
      const response = await axios.request({
        method,
        baseURL: "https://afrobit-api.herokuapp.com/api/",
        url,
        // params: {},
        data,
        headers: {
          "content-type": "application/json",
          // "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Headers": "*",
          // Authorization: "Bearer " + extraheaders,
        },
      });

      // Default

      dispatch(actions.apiCallSuccess(response.data));

      // Specific
      if (onSuccess) {
        dispatch({ type: onSuccess, payload: response.data });
      }
    } catch (error) {
      // Default
      dispatch(actions.apiCallFailed(error));

      // Specific
      if (onError) dispatch({ type: onError, payload: error });
    }
  };

export default api;
