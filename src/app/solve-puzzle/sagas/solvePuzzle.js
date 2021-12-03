import {call, put, select, takeEvery} from "redux-saga/effects";
import {types as solvePuzzleTypes} from "..";
import apiAxios from "../../../config/axios";
import hashids from "../../../config/hashids";
import api from "../../../config/api";
import {types as modalTypes} from "../../modal";
import {types as timerTypes} from "../../timer";

export const getSolvePuzzleState = (state) => state.solvePuzzle;
export const getUserState = (state) => state.user;
export const getTimerState = (state) => state.timer;

export function* watchChangeValue() {
    yield takeEvery(solvePuzzleTypes.CELL_VALUE_CHANGE, validateCellValueChangeSolve);
};

export function* watchDeleteValue() {
    yield takeEvery(solvePuzzleTypes.CELL_VALUE_DELETE, validateCellValueChangeSolve);
};

export function* validateCellValueChangeSolve(){
    yield put({type: solvePuzzleTypes.CELL_VALUE_CHANGE_INITIALIZE})
    const solvePuzzleState = yield select(getSolvePuzzleState);
    const timerState = yield select(getTimerState);

    const {currentDigits} = solvePuzzleState;

    try {
        if (solvePuzzleState.enterMode === "digit") {
            const response = yield call(apiAxios.post, api.checkPuzzle(), {cells: currentDigits});
            const conflictCells = response.data["conflictCells"];
            yield put({type: solvePuzzleTypes.UPDATE_CONFLICT_CELLS, conflictCells});
            if (solvePuzzleState.currentDigits === solvePuzzleState.loadedPuzzle.solution_digits && timerState.isOn) {
                yield put({type: timerTypes.STOP_TIMER});
                yield put({type: modalTypes.CREATE_MODAL, id: "solve-puzzle"});
            }
        }
    } catch (error) {
        console.log(error);
    }
};

export function* watchInitializeSolvePuzzle() {
    yield takeEvery(solvePuzzleTypes.INITIALIZE_SOLVE_PUZZLE, initializeSolvePuzzle);
};

export function* initializeSolvePuzzle(action){
    const {
        id
    } = action;

    const solvePuzzleState = yield select(getSolvePuzzleState);

    let response = yield call(apiAxios.get, api.getPuzzle(hashids.decode(id)));
    response.data.puzzle.id = hashids.encode(response.data.puzzle.id);
    yield put({type: solvePuzzleTypes.INITIALIZE_SOLVE_PUZZLE_SUCCESS, puzzle: response.data});

    if (!solvePuzzleState.savedPuzzle) {
        yield put({type: timerTypes.RESET_TIMER});
    } else {
        yield put({type: timerTypes.START_TIMER});
    }

};

export function* watchViewPuzzle() {
    yield takeEvery(solvePuzzleTypes.VIEW_PUZZLE, viewPuzzle);
};

export function* viewPuzzle(){
    yield put({type: modalTypes.DESTROY_MODAL, id: "solve-puzzle"});
};

export function* watchCompletePuzzleRequest() {
    yield takeEvery(solvePuzzleTypes.COMPLETE_PUZZLE_REQUEST, completePuzzle);
};

export function* completePuzzle(){
    const solvePuzzleState = yield select(getSolvePuzzleState);
    const userState = yield select(getUserState);
    const timerState = yield select(getTimerState);
    const loadedPuzzle = solvePuzzleState.loadedPuzzle;
    const date = new Date();

    const offset = date.getTimezoneOffset();
    const offsetDate = new Date(date.getTime() - (offset * 60 * 1000));
    try {
        yield call(apiAxios.post, api.completePuzzle(hashids.decode(loadedPuzzle.id)), {
            name: loadedPuzzle.name,
            user: userState.id,
            time: timerState.time,
            score: 10,
            rating: solvePuzzleState.rating,
            date: offsetDate.toISOString().split('T')[0],
            shared: false,
            given_digits: loadedPuzzle.given_digits
        });
    } catch (e) {
        console.log(e);
    }
};

export function* watchSavePuzzleRequest() {
    yield takeEvery(solvePuzzleTypes.SAVE_PUZZLE_REQUEST, savePuzzle);
};

export function* savePuzzle(){
    const solvePuzzleState = yield select(getSolvePuzzleState);
    const userState = yield select(getUserState);
    const timerState = yield select(getTimerState);
    const loadedPuzzle = solvePuzzleState.loadedPuzzle;
    const date = new Date();

    const offset = date.getTimezoneOffset();
    const offsetDate = new Date(date.getTime() - (offset * 60 * 1000));

    try{
        const saveResponse = yield call(apiAxios.post, api.savePuzzle(), {
            user: userState.id,
            puzzle: hashids.decode(loadedPuzzle.id)[0],
            digits: solvePuzzleState.currentDigits,
            cell_colors: solvePuzzleState.cellColors,
            time: timerState.time,
            date: offsetDate.toISOString().split('T')[0],
            corner_digits: solvePuzzleState.cornerDigits,
            center_digits: solvePuzzleState.centerDigits
        });
        yield put({type: solvePuzzleTypes.SAVE_PUZZLE_SUCCESS, successMessage: "Puzzle solution saved."})

    } catch (e) {
        yield put({type: solvePuzzleTypes.SAVE_PUZZLE_FAILURE, errorMessage: e.message})
        console.log(e);
    }
};

export default () => [
    watchInitializeSolvePuzzle(),
    watchChangeValue(),
    watchDeleteValue(),
    watchViewPuzzle(),
    watchCompletePuzzleRequest(),
    watchSavePuzzleRequest()
];