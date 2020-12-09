import { checkData } from "./localAuthCheck";

const SET_USER_AUTH = 'SET_USER_AUTH';

export const setUserAuth = (isAuth, loginFault = false) => ({ type: SET_USER_AUTH, isAuth, loginFault });

let initialState = {
    isAuth: false,
    loginFault: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH: {
            return {
                ...state,
                isAuth: action.isAuth,
                loginFault: action.loginFault
            };
        }
        default:
            return state;
    }
}

export const login = values => async (dispatch) => {
    let response = await checkData(values);
    if (response.resultCode === 0) {
        dispatch(setUserAuth(true))
    }
    else {
        dispatch(setUserAuth(false, true))
    };
}

export default authReducer;