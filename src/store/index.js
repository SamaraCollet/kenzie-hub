import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './modules/users-list/reducer'
import setUserTokenReducer from './modules/current-user/reducer'

const reducers = combineReducers({ 
    user : userReducer,
    currentUserToken : setUserTokenReducer,
})

const store = createStore( reducers, applyMiddleware(thunk))

export default store