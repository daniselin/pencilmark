import {call, put, select, takeEvery} from "redux-saga/effects";
import {types as userTypes} from "../index";
import apiAxios from "../../../config/axios";
import api from "../../../config/api";
import {goBack, push, replace} from "react-router-redux";

const getUserState = (state) => state.user;

export function* watchInitializeSearch() {
    yield takeEvery(userTypes.INITIALIZE_SEARCH, initializeSearch);
};

export function* initializeSearch(action){

    const {query} = action;

    if (query && query !== "") {
        yield call(submitSearch, {
            query: query
        })
    };
    yield put({type: userTypes.FINISH_INITIALIZE_SEARCH})
};

export function* watchSubmitSearch() {
    yield takeEvery(userTypes.SUBMIT_SEARCH, submitSearch);
};

export function* submitSearch(action){

    const {query} = action;

    try {
        yield put({type: userTypes.SUBMIT_SEARCH_REQUEST});
        yield put(push("?q=" + query));

        const response = yield call(apiAxios.post, api.searchUsers(), {query: query});
        yield put({type:userTypes.SUBMIT_SEARCH_SUCCESS, results: response.data.searchResults});
    }
    catch (e) {
        console.log(e);
        yield put({type: userTypes.SUBMIT_SEARCH_FAILURE, message: e.message});
    }
};

export function* watchSelectProfile() {
    yield takeEvery(userTypes.SELECT_PROFILE, selectProfile);
};

export function* selectProfile(action){

    const {index} = action;
    const userState = yield select(getUserState);

    yield put(replace("/user/"));
    yield put(push(userState.userSearchResults[index].username));
    yield put({type: userTypes.RESET_USER_SEARCH});
};

export default () => [
    watchInitializeSearch(),
    watchSubmitSearch(),
    watchSelectProfile()
];