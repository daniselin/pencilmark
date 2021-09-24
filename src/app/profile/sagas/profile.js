import {call, put, select, takeEvery} from "redux-saga/effects";
import {types as profileTypes} from "..";
import apiAxios from "../../../config/axios";
import api from "../../../config/api";
import {types as buildPuzzleTypes} from "../../build-puzzle";
import {push} from "react-router-redux";
import hashids from "../../../config/hashids";

export const getProfileState = state => state.profile;

export function* watchInitializeProfile() {
    yield takeEvery(profileTypes.INITIALIZE_PROFILE, initializeProfile);
};

export function* initializeProfile(action){
    const {
        username
    } = action;

    try {
        let response = yield call(apiAxios.get, api.getProfile(username));
        for (let i = 0; i < response.data.createdPuzzles.length; i++) {
            response.data.createdPuzzles[i].id = hashids.encode(response.data.createdPuzzles[i].id);
        }
        for (let i = 0; i < response.data.savedPuzzles.length; i++) {
            response.data.savedPuzzles[i].id = hashids.encode(response.data.savedPuzzles[i].id);
        }
        yield put({type: profileTypes.INITIALIZE_PROFILE_SUCCESS, response: response.data});
    } catch (e) {
        console.log(e);
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
    let selectedPuzzle = profileState.savedPuzzles[key];
    yield put({type: buildPuzzleTypes.LOAD_SAVED_PUZZLE, selectedPuzzle});
    yield put({type: buildPuzzleTypes.SHOULD_LOAD_PUZZLE});
    yield put(push("/puzzle/build"));
};

export function* watchSelectCreatedPuzzle() {
    yield takeEvery(profileTypes.SELECT_CREATED_PUZZLE, selectCreatedPuzzle);
};

export function* selectCreatedPuzzle(action){
    const {
        key
    } = action;

    const profileState = yield select(getProfileState);
    let selectedPuzzle = profileState.createdPuzzles[key];
    yield put(push("/puzzle/solve/" + selectedPuzzle.id + "/"));

};

export default () => [
    watchInitializeProfile(),
    watchSelectSavedPuzzle(),
    watchSelectCreatedPuzzle()
];