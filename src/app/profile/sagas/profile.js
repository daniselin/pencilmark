import {call, put, select, takeEvery} from "redux-saga/effects";
import {types as profileTypes} from "..";
import apiAxios from "../../../config/axios";
import api from "../../../config/api";
import {types as buildPuzzleTypes} from "../../build-puzzle";
import {types as solvePuzzleTypes} from "../../solve-puzzle";
import {push} from "react-router-redux";
import hashids from "../../../config/hashids";
import {types as modalTypes} from "../../modal";
import {types as userTypes} from "../../user";
import {types as timerTypes} from "../../timer";

export const getProfileState = state => state.profile;
export const getUserState = state => state.user;

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
        yield put({type: profileTypes.INITIALIZE_PROFILE_FAILURE});
    }
};

export function* watchSelectSavedPuzzle() {
    yield takeEvery(profileTypes.SELECT_SAVED_PUZZLE, selectSavedPuzzle);
};

export function* selectSavedPuzzle(){
    yield put({type: modalTypes.CREATE_MODAL, id: "saved-puzzle"});
};

export function* watchResumeSavedPuzzle() {
    yield takeEvery(profileTypes.RESUME_SAVED_PUZZLE, resumeSavedPuzzle);
};

export function* resumeSavedPuzzle(){
    const profileState = yield select(getProfileState);
    let selectedPuzzle = profileState.selectedPuzzle;
    yield put({type: buildPuzzleTypes.LOAD_SAVED_PUZZLE, selectedPuzzle});
    yield put({type: buildPuzzleTypes.SHOULD_LOAD_PUZZLE});
    yield put(push("/puzzle/build/"));
};

export function* watchSolvePuzzle() {
    yield takeEvery(profileTypes.SOLVE_PUZZLE, solvePuzzle);
};

export function* solvePuzzle(){
    const profileState = yield select(getProfileState);
    const {selectedPuzzle} = profileState;
    yield put({type: modalTypes.DESTROY_MODAL, id: "created-puzzle"})
    yield put(push("/puzzle/solve/" + selectedPuzzle.id + "/"));
};

export function* watchSelectCreatedPuzzle() {
    yield takeEvery(profileTypes.SELECT_CREATED_PUZZLE, selectCreatedPuzzle);
};

export function* selectCreatedPuzzle(){
    yield put({type: modalTypes.CREATE_MODAL, id: "created-puzzle"});
};

export function* watchSelectCompletedPuzzle() {
    yield takeEvery(profileTypes.SELECT_COMPLETED_PUZZLE, selectCompletedPuzzle);
};

export function* selectCompletedPuzzle(){
    yield put({type: modalTypes.CREATE_MODAL, id: "completed-puzzle"});
};

export function* watchConfirmDelete() {
    yield takeEvery(profileTypes.CONFIRM_DELETE, confirmDelete);
};

export function* confirmDelete(){
    yield put({type: modalTypes.CREATE_MODAL, id: "delete-confirmation"});
};

export function* watchDeleteSavedPuzzle() {
    yield takeEvery(profileTypes.DELETE_SAVED_PUZZLE_REQUEST, deleteSavedPuzzle);
};

export function* deleteSavedPuzzle(){
    const profileState = yield select(getProfileState);
    const selectedPuzzle = profileState.selectedPuzzle;
    try {
        yield call(apiAxios.post, api.deletePuzzle(), {id: hashids.decode(selectedPuzzle.id)[0]});
        yield put({type: profileTypes.DELETE_SAVED_PUZZLE_SUCCESS, successMessage: "Puzzle successfully deleted."})
        yield put({type: modalTypes.DESTROY_MODAL, id: "delete-confirmation"})
    }
    catch (e) {
        yield put({type: profileTypes.DELETE_SAVED_PUZZLE_FAILURE});
        yield put({type: modalTypes.DESTROY_MODAL, id: "delete-confirmation"})
    }
};

export function* watchFollowUnfollow() {
    yield takeEvery(profileTypes.FOLLOW_OR_UNFOLLOW, followUnfollow);
};

export function* followUnfollow(action){
    const {id} = action;
    const userState = yield select(getUserState);

    try {
        const response = yield call(apiAxios.post, api.followOrUnfollow(), {
            following: id,
            follower: userState.id
        });
        if (response.data.isFollowing) {
            yield put({type: profileTypes.UNFOLLOW_SUCCESS});
            yield put({type: userTypes.UNFOLLOW_SUCCESS, following: id});
        }
        else {
            yield put({type: profileTypes.FOLLOW_SUCCESS});
            yield put({type: userTypes.FOLLOW_SUCCESS, following: id});
        }
    }
    catch (e) {
        yield put({type: profileTypes.FOLLOW_OR_UNFOLLOW_ERROR, error: {message: "Could not complete the request. Please try again."}});
        console.log(e)
    }
};

export function* watchSelectSavedSolution() {
    yield takeEvery(profileTypes.SELECT_SAVED_SOLUTION, selectSavedSolution);
};

export function* selectSavedSolution(){
    yield put({type: modalTypes.CREATE_MODAL, id: "saved-solution"});
};

export function* watchResumeSavedSolution() {
    yield takeEvery(profileTypes.RESUME_SAVED_SOLUTION, resumeSavedSolution);
};

export function* resumeSavedSolution(){
    const profileState = yield select(getProfileState);
    let selectedPuzzle = profileState.selectedPuzzle;
    yield put({type: solvePuzzleTypes.LOAD_SAVED_SOLUTION, selectedPuzzle});
    yield put({type: timerTypes.SET_TIME, time: selectedPuzzle.time});
    yield put(push("/puzzle/solve/" + hashids.encode(selectedPuzzle.saved_solution.id)));
};

export function* watchDeleteSavedSolution() {
    yield takeEvery(profileTypes.DELETE_SAVED_SOLUTION_REQUEST, deleteSavedSolution);
};

export function* deleteSavedSolution(){
    const profileState = yield select(getProfileState);
    const selectedPuzzle = profileState.selectedPuzzle;
    try {
        yield call(apiAxios.post, api.deleteSolution(), {id: selectedPuzzle.id});
        yield put({type: profileTypes.DELETE_SAVED_SOLUTION_SUCCESS, id: selectedPuzzle.id, successMessage: "Solution successfully deleted."})
        yield put({type: modalTypes.DESTROY_MODAL, id: "delete-confirmation"})
    }
    catch (e) {
        yield put({type: profileTypes.DELETE_SAVED_SOLUTION_FAILURE});
        yield put({type: modalTypes.DESTROY_MODAL, id: "delete-confirmation"})
    }
};

export function* watchViewLeaderboard() {
    yield takeEvery(profileTypes.VIEW_LEADERBOARD, viewLeaderboard);
};

export function* viewLeaderboard(){
    const profileState = yield select(getProfileState);
    const selectedPuzzle = profileState.selectedPuzzle;
    try {
        const response = yield call(apiAxios.get, api.getPuzzle(selectedPuzzle.puzzle));
        yield put({type: profileTypes.VIEW_LEADERBOARD_SUCCESS, leaderboard: response.data.leaderboard})
        yield put({type: modalTypes.DESTROY_MODAL, id: "completed-puzzle"})
        yield put({type: modalTypes.CREATE_MODAL, id: "completed-puzzle-leaderboard"})
    }
    catch (e) {
        yield put({type: profileTypes.DELETE_SAVED_SOLUTION_FAILURE});
        yield put({type: modalTypes.DESTROY_MODAL, id: "delete-confirmation"})
    }
};

export default () => [
    watchInitializeProfile(),
    watchResumeSavedPuzzle(),
    watchSelectSavedPuzzle(),
    watchSelectCreatedPuzzle(),
    watchSelectCompletedPuzzle(),
    watchSolvePuzzle(),
    watchDeleteSavedPuzzle(),
    watchConfirmDelete(),
    watchFollowUnfollow(),
    watchSelectSavedSolution(),
    watchResumeSavedSolution(),
    watchDeleteSavedSolution(),
    watchViewLeaderboard()
];