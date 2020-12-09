import axios from "axios";
import { getRequest } from "./action";

export const getRequestThunk = (endpoint, setError) => {
  return (dispatch) => {
    axios
      .get(`https://kenziehub.me/${endpoint}`)
      .then((res) => {
        dispatch(console.log(res));
      })
      .catch((err) => {
        dispatch(getRequest([]));
        setError(true);
      });
  };
};
