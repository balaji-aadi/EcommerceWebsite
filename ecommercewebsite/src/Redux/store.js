import {configureStore,combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cartRedux'
import userReducer from './userSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'

const persistConfig = {
    key : "root",
    version : 1,
    storage
}

const reducer = combineReducers({
    user : userReducer,
    cart : cartReducer,
})

const presistedReducer = persistReducer(persistConfig,reducer);

export default configureStore({
    reducer : presistedReducer
});
