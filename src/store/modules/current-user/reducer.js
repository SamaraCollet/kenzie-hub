import { SET_TOKEN } from "./actionTypes";

const setUserTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_TOKEN:
      const { currentUserToken } = action;
      return currentUserToken;

    default:
      return state;
  }
};

export default setUserTokenReducer;
