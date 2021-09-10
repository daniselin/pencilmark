export const types = {
    INITIALIZE_AUTHENTICATION: "user/INITIALIZE_AUTHENTICATION",
    LOGIN_USER_SUCCESS: "user/LOGIN_USER_SUCCESS",
    LOGIN_USER_FAILURE: "user/LOGIN_USER_FAILURE",
    SIGN_IN_USER_REQUEST: "user/SIGN_IN_USER_REQUEST",
    SIGN_IN_USER: "user/SIGN_IN_USER",
    SIGN_UP_USER: "user/SIGN_UP_USER",
    LOGOUT_USER: "user/LOGOUT_USER",
    LOGIN_REQUIRED: "user/LOGIN_REQUIRED",
    UPDATE_USER_VALUES: "user/UPDATE_USER_VALUES",
    CLEAR_USER_VALUES: "user/CLEAR_USER_VALUES",

}

export const initialState = {
    username: "Unknown",
    id: "",
    email: "",
    score: 0,
    hasAuthenticated: false,
    isLoggingIn: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS:
            return {...state, hasAuthenticated: true, isLoggingIn: false};
        case types.LOGIN_USER_FAILURE:
            return {...initialState};
        case types.SIGN_IN_USER_REQUEST:
            return {...state, isLoggingIn: true};
        case types.UPDATE_USER_VALUES:
            console.log(action);
            return {...state,
                username: action.userData.username,
                email: action.userData.email,
                score: action.userData.score,
                id: action.userData.id
            };
        case types.CLEAR_USER_VALUES:
            return {...initialState};
        default:
            return state;
    }
};

export const actions = {
    logoutUser: () => {
        return {type: types.LOGOUT_USER};
    },
    loginUser: () => {
        return {type: types.SIGN_IN_USER};
    },
    signupUser: () => {
        return {type: types.SIGN_UP_USER};
    },
    initializeAuthentication: () => {
        return {type: types.INITIALIZE_AUTHENTICATION};
    }
}