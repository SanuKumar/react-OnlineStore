import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import LoginReducer from '../login/LoginReducer';

const RootReducer = combineReducers({
    Login: LoginReducer,
    form: reducer
})

export {
    RootReducer
}