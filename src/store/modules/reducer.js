import { ADD_USER } from './actionTypes'

const userReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_USER:
            const { user } = action
            return user

        default:
            return state
    }
}

export default userReducer