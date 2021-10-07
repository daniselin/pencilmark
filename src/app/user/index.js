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
    INITIALIZE_SEARCH: "user/INITIALIZE_SEARCH",
    FINISH_INITIALIZE_SEARCH: "user/FINISH_INITIALIZE_SEARCH",
    SUBMIT_SEARCH: "user/SUBMIT_SEARCH",
    SUBMIT_SEARCH_REQUEST: "user/SUBMIT_SEARCH_REQUEST",
    SUBMIT_SEARCH_FAILURE: "user/SUBMIT_SEARCH_FAILURE",
    SUBMIT_SEARCH_SUCCESS: "user/SUBMIT_SEARCH_SUCCESS",
    SELECT_PROFILE: "user/SELECT_PROFILE",
    RESET_USER_SEARCH: "user/RESET_USER_SEARCH",
}

export const initialState = {
    username: "Unknown",
    id: "",
    email: "",
    score: 0,
    hasAuthenticated: false,
    isLoggingIn: false,
    userSearchResults: [],
    isSearchLoading: false,
    searchErrorMessage: "",
    isLoading: false
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
            return {...state,
                username: action.userData.username,
                email: action.userData.email,
                score: action.userData.score,
                id: action.userData.id
            };
        case types.CLEAR_USER_VALUES:
            return {...initialState};
        case types.INITIALIZE_SEARCH:
            return {
                ...state,
                isLoading: true
            }
        case types.FINISH_INITIALIZE_SEARCH:
            return {
                ...state,
                isLoading: false
            }
        case types.SUBMIT_SEARCH_REQUEST:
            return {
                ...state,
                isSearchLoading: true
            };
        case types.SUBMIT_SEARCH_FAILURE:
            return {
                ...state,
                isSearchLoading: false,
                searchErrorMessage: action.message
            };
        case types.SUBMIT_SEARCH_SUCCESS:
            return {
                ...state,
                isSearchLoading: false,
                userSearchResults: action.results
            };
        case types.RESET_USER_SEARCH:
            return {
                ...state,
                isSearchLoading: false,
                userSearchResults: []
            };
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
    },
    initializeSearch: (query) => {
        return {type: types.INITIALIZE_SEARCH, query};
    },
    submitSearch: (query) => {
        return {type: types.SUBMIT_SEARCH, query};
    },
    selectProfile: (index) => {
        return {type: types.SELECT_PROFILE, index};
    }
}