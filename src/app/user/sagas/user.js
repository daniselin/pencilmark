import {types as userTypes} from "..";
import apiAxios from "../../../config/axios";
import api from "../../../config/api";
import {call, put, select, takeEvery} from "redux-saga/effects";
import {inflateForm} from "../../form/utils";
import {types as messageTypes} from "../../messages";
import {types as formTypes} from "../../form";
import {types as tokenTypes} from "../../token";
import has from "lodash/has";
import {push} from 'react-router-redux';

export const getFormState = state => state.form;
export const getTokenState = state => state.token;

export function* watchInitializeUser() {
    yield takeEvery(userTypes.INITIALIZE_AUTHENTICATION, initializeUser);
};

export function* initializeUser(){
    yield put({type: formTypes.RESET_FORM});
    yield put({type: messageTypes.RESET_MESSAGES});
    if (localStorage.getItem("refresh")) {
        try {
            yield put({type: userTypes.SIGN_IN_USER_REQUEST});

            const userResponse = yield call(apiAxios.get, api.retrieveUser());
            const userData = userResponse.data;
            yield put({
                type: userTypes.UPDATE_USER_VALUES, userData
            });
            yield put({type: userTypes.LOGIN_USER_SUCCESS});

        } catch (error) {
            localStorage.clear();
            yield put(push("/login"));
        }
    }
};

export function* watchSignUpUser() {
    yield takeEvery(userTypes.SIGN_UP_USER, signupUser);
};

export function* signupUser() {
    const formState = yield select(getFormState);
    const {values} = formState;
    const signupForm = inflateForm(values);
    try {
        yield put({type: messageTypes.RESET_MESSAGES});
        yield put({type: formTypes.RESET_FIELD_ERRORS});
        yield put({type: userTypes.SIGN_IN_USER_REQUEST});

        yield call(apiAxios.post, api.createUser(), signupForm);
        const response = yield call(apiAxios.post, api.obtainToken(), {username: signupForm["username"], password: signupForm["password"]});
        if (has(response.data, "access") && has(response.data, "refresh")) {
            yield put({ type: userTypes.LOGIN_USER_SUCCESS });
            yield put({
                type: tokenTypes.RETRIEVE_TOKENS_SUCCESS,
                action: {
                    refreshToken: response.data["refresh"],
                    accessToken: response.data["access"]
                }
            });
            localStorage.setItem("access", response.data["access"]);
            localStorage.setItem("refresh", response.data["refresh"]);

            const userResponse = yield call(apiAxios.get, api.retrieveUser());
            const userData = userResponse.data;
            yield put( {
                type: userTypes.UPDATE_USER_VALUES, userData
            })
        } else {
            yield put({
                type: userTypes.LOGIN_USER_FAILURE, error: {message: "Failed to signup user"}
            });
            yield put( { type: tokenTypes.RETRIEVE_TOKENS_FAILURE })
        };
    } catch (error) {
        console.log(error);
    };
};

export function* watchLogout() {
    yield takeEvery(userTypes.LOGOUT_USER, logoutUser);
};

export function* logoutUser() {
    const tokenState = yield select(getTokenState);

    try {
        yield call(apiAxios.post, api.blacklistToken(), {refresh_token: tokenState.refreshToken});
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        yield put({type: tokenTypes.CLEAR_TOKENS});
        yield put({type: userTypes.CLEAR_USER_VALUES});
        yield put( {type: formTypes.RESET_FORM});
        window.location.reload()
    } catch (error) {
        console.log(error);
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        yield put({type: tokenTypes.CLEAR_TOKENS});
        yield put({type: userTypes.CLEAR_USER_VALUES});
        yield put( {type: formTypes.RESET_FORM});
        window.location.reload()
    }
};

export function* watchLogin() {
    yield takeEvery(userTypes.SIGN_IN_USER, loginUser);
};

export function* loginUser(action){
    const formState = yield select(getFormState);
    const {values} = formState;
    const loginForm = inflateForm(values);

    try {
        yield put({type: messageTypes.RESET_MESSAGES});
        yield put({type: formTypes.RESET_FIELD_ERRORS});
        yield put({type: userTypes.SIGN_IN_USER_REQUEST});

        const response = yield call(apiAxios.post, api.obtainToken(), loginForm);
        if (has(response.data, "access") && has(response.data, "refresh")) {
            yield put({ type: userTypes.LOGIN_USER_SUCCESS });
            yield put({
                type: tokenTypes.RETRIEVE_TOKENS_SUCCESS,
                action: {
                    refreshToken: response.data["refresh"],
                    accessToken: response.data["access"]
                }
            })
            localStorage.setItem("access", response.data["access"]);
            localStorage.setItem("refresh", response.data["refresh"]);

            const userResponse = yield call(apiAxios.get, api.retrieveUser());
            const userData = userResponse.data;
            yield put( {
                type: userTypes.UPDATE_USER_VALUES, userData
            })
        } else {
            yield put({
                type: userTypes.LOGIN_USER_FAILURE, error: {message: "Failed to login user"}
            });
            yield put( { type: tokenTypes.RETRIEVE_TOKENS_FAILURE })
        }
    } catch (error) {
        console.log(error);
    }
};

export default () => [
    watchLogout(),
    watchLogin(),
    watchInitializeUser(),
    watchSignUpUser()
];