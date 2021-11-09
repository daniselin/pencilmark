import {call, put, select, takeEvery} from "redux-saga/effects";
import {types as puzzleTypes} from "../index";
import apiAxios from "../../../config/axios";
import api from "../../../config/api";
import {goBack, push, replace} from "react-router-redux";
import hashids from "../../../config/hashids";
import {types as profileTypes} from "../../profile";
import {types as modalTypes} from "../../modal";
import {getProfileState} from "../../profile/sagas/profile";

const getPuzzleState = (state) => state.searchPuzzle;

export function* watchInitializeSearch() {
    yield takeEvery(puzzleTypes.INITIALIZE_SEARCH, initializeSearch);
};

export function* initializeSearch(action){

    const {query} = action;

    if (query && query !== "") {
        yield call(submitSearch, {
            query: query
        })
    };
    yield put({type: puzzleTypes.FINISH_INITIALIZE_SEARCH})
};

export function* watchSubmitSearch() {
    yield takeEvery(puzzleTypes.SUBMIT_SEARCH, submitSearch);
};

export function* submitSearch(action){

    const {query} = action;

    try {
        yield put({type: puzzleTypes.SUBMIT_SEARCH_REQUEST});
        yield put(push("?q=" + query));

        const response = yield call(apiAxios.post, api.searchPuzzles(), {query: query});
        console.log(response.data);
        yield put({type:puzzleTypes.SUBMIT_SEARCH_SUCCESS, results: response.data.searchResults});
    }
    catch (e) {
        console.log(e);
        yield put({type: puzzleTypes.SUBMIT_SEARCH_FAILURE, message: e.message});
    }
};

export function* watchSolvePuzzle() {
    yield takeEvery(puzzleTypes.SOLVE_PUZZLE, solvePuzzle);
};

export function* solvePuzzle(action){

    const puzzleState = yield select(getPuzzleState);

    const selectedPuzzle = puzzleState.selectedPuzzle;
    yield put(push("/puzzle/solve/" + hashids.encode(selectedPuzzle.id) + "/"));
    yield put({type: modalTypes.DESTROY_MODAL, id: "created-puzzle"})
    yield put({type: puzzleTypes.RESET_PUZZLE_SEARCH})
};

export function* watchSelectCreatedPuzzle() {
    yield takeEvery(puzzleTypes.SELECT_CREATED_PUZZLE, selectCreatedPuzzle);
};

export function* selectCreatedPuzzle(){
    yield put({type: modalTypes.CREATE_MODAL, id: "search-puzzle"});
};

export default () => [
    watchInitializeSearch(),
    watchSubmitSearch(),
    watchSolvePuzzle(),
    watchSelectCreatedPuzzle()
];