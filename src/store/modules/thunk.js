import axios from "axios";
import { addUser } from "./action";

export const addUserThunk = (perPage, currentPage) => (dispatch) => {
    axios
        .get(`https://kenziehub.me/users?perPage=${perPage}&page=${currentPage}`)
        .then((res) => {
            dispatch(addUser(res.data));
            console.log(res.data);
        })
        .catch((err) => console.log(err));
};