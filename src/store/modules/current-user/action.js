import { SET_USER } from './actionTypes'

export const addUser = currentUser => ({
    type: SET_USER,
    currentUser,
})