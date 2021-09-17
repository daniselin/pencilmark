import {call, put, takeEvery} from "redux-saga/effects";
import {types as profileTypes} from "..";
import apiAxios from "../../../config/axios";
import api from "../../../config/api";

export function* watchInitializeProfile() {
    yield takeEvery(profileTypes.INITIALIZE_PROFILE, initializeProfile);
};

export function* initializeProfile(action){
    const {
        username
    } = action;

    try {
        const response = yield call(apiAxios.get, api.getProfile(username));
        yield put({type: profileTypes.INITIALIZE_PROFILE_SUCCESS, response: response.data});
    } catch (e) {
        console.log(e)
    }
};

export default () => [
    watchInitializeProfile()
];