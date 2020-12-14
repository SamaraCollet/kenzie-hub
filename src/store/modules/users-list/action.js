import { ADD_USER } from './actionTypes'

export const addUser = user => ({
    type: ADD_USER,
    user,
})