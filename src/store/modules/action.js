import { GET_METHOD } from "./actionTypes";

export const getRequest = (endpoint) => ({
  type: GET_METHOD,
  endpoint,
});
