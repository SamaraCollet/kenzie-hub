import { GET_METHOD } from "./actionTypes";

export const getRequest = (baseUrl = "https://kenziehub.me/", endpoint) => ({
  type: GET_METHOD,
  endpoint,
  baseUrl,
});
