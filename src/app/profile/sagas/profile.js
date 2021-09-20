import {call, put, select, takeEvery} from "redux-saga/effects";
import {types as profileTypes} from "..";
import apiAxios from "../../../config/axios";
import api from "../../../config/api";
import {types as buildPuzzleTypes} from "../../build-puzzle";
import {push} from "react-router-redux";

export const getProfileState = state => state.profile;

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

export function* watchSelectSavedPuzzle() {
    yield takeEvery(profileTypes.SELECT_SAVED_PUZZLE, selectSavedPuzzle);
};

export function* selectSavedPuzzle(action){
    const {
        key
    } = action;

    const profileState = yield select(getProfileState);
    const selectedPuzzle = profileState.savedPuzzles[key];
    yield put({type: buildPuzzleTypes.LOAD_SAVED_PUZZLE, selectedPuzzle});
    yield put(push("/puzzle/build"));

};

export default () => [
    watchInitializeProfile(),
    watchSelectSavedPuzzle()
];