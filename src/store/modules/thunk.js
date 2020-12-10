import axios from 'axios'

export const addUserThunk = () => dispatch => {
    axios
    .get(`https://kenziehub.me/users`)
    .then(res => {
        dispatch(console.log(res.data))
    })
    .catch(err => console.log(err))
}