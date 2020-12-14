import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './modules/users-list/reducer'
import setUserReducer from './modules/current-user/reducer'

const reducers = combineReducers({ 
    user : userReducer,
    currentUser : setUserReducer,
})

const store = createStore( reducers, applyMiddleware(thunk))

export default store