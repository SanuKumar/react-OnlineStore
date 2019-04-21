import InitialState from '../store/InitialState';
import { LOGIN_SUCCESS } from './LoginAction';

const LoginReducer = (state = InitialState.Login, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:{
      return {
        ...state, 
        userName: action.userName,
        isLogin: true
      }
    }
    default: return state
  }
}

export default LoginReducer