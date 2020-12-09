import { GET_METHOD } from "./actionTypes";

const requestReducer = (state = [], action) => {
  switch (action.type) {
    case GET_METHOD:
      const { endpoint } = action;
      return endpoint;

    default:
      return state;
  }
};

export default requestReducer;
