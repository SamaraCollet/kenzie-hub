import { SET_USER } from "./actionTypes";

const setUserReducer = (state = '', action) => {
    switch (action.type) {
        case SET_USER:
            const { currentUser } = action;
            return currentUser;

        default:
            return state;
    }
};

export default setUserReducer;