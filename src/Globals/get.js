import axios from "axios";


export const getEndpoint = (endpoint) => {
  try {
    let auth = JSON.parse(localStorage.getItem("token"));
    auth = auth.access_token;

    return axios.request({
      method: "GET",
      baseURL: "https://afrobit-api.herokuapp.com/api/",
      url: endpoint,
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + auth,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
