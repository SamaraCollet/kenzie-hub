import { SET_TOKEN } from './actionTypes'

export const addUserToken = currentUserToken => ({
    type: SET_TOKEN,
    currentUserToken,
})