import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from "./authReducer";
import contactsReducer from './contactsReducer'

const reducers = combineReducers({
    auth: authReducer,
    contacts: contactsReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;