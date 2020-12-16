import { SET_EDIT } from "./actionTypes";

const setNewUser = (state = {}, action) => {
  switch (action.type) {
    case SET_EDIT:
      const { newEdit } = action;
      return newEdit;

    default:
      return state;
  }
};

export default setNewUser;
