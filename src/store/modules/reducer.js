import { GET_METHOD } from "./actionTypes";

const requestReducer = (state = [], action) => {
  switch (action.type) {
    case GET_METHOD:
      return;

    default:
      break;
  }
};

export default requestReducer;
