import InitialState from '../store/InitialState';

const LoginReducer = (state = InitialState.Login, action) => {
    switch(action.type) {
        case 'LOGIN_DATA': {
            return {
                ...state
            }
        }
    default: return state
    }
}

export default LoginReducer