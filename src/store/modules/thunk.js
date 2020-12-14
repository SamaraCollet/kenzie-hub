import axios from "axios";
import { addUser } from "./action";

export const addUserThunk = () => (dispatch) => {
    axios
        .get(`https://kenziehub.me/users`)
        .then((res) => {
            dispatch(addUser(res.data))
        })
        .catch((err) => console.log(err));
};