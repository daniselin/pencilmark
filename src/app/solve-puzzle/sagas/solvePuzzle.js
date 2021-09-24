import {call, put, select, takeEvery} from "redux-saga/effects";
import {types as solvePuzzleTypes} from "..";
import {types as formTypes} from "../../form";
import {validateCellValueChange} from "../../build-puzzle/sagas/buildPuzzle";
import apiAxios from "../../../config/axios";
import hashids from "../../../config/hashids";
import api from "../../../config/api";
import {types as buildPuzzleTypes} from "../../build-puzzle";
import {types as modalTypes} from "../../modal";
import {types as timerTypes} from "../../timer";

const getSolvePuzzleState = (state) => state.solvePuzzle;
const getUserState = (state) => state.user;
const getFormState = (state) => state.form;

export function* watchChangeValue() {
    yield takeEvery(solvePuzzleTypes.CELL_VALUE_CHANGE, validateCellValueChangeSolve);
};

export function* watchDeleteValue() {
    yield takeEvery(solvePuzzleTypes.CELL_VALUE_DELETE, validateCellValueChangeSolve);
};

export function* validateCellValueChangeSolve(){
    yield put({type: solvePuzzleTypes.CELL_VALUE_CHANGE_INITIALIZE})
    const solvePuzzleState = yield select(getSolvePuzzleState);

    const {currentDigits} = solvePuzzleState;

    try {
        const response = yield call(apiAxios.post, api.checkPuzzle(), {cells: currentDigits});
        const conflictCells = response.data["conflictCells"];
        yield put({type: solvePuzzleTypes.UPDATE_CONFLICT_CELLS, conflictCells});
        if (solvePuzzleState.currentDigits === solvePuzzleState.loadedPuzzle.solution_digits){
            yield put({type: timerTypes.STOP_TIMER});
            yield put({type: modalTypes.CREATE_MODAL, id: "solve-puzzle"});
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

    let response = yield call(apiAxios.get, api.getPuzzle(hashids.decode(id)));
    response.data.puzzle.id = hashids.encode(response.data.puzzle.id);
    yield put({type: solvePuzzleTypes.INITIALIZE_SOLVE_PUZZLE_SUCCESS, puzzle: response.data});
    yield put({type: timerTypes.RESET_TIMER});

};

export function* watchViewPuzzle() {
    yield takeEvery(solvePuzzleTypes.VIEW_PUZZLE, viewPuzzle);
};

export function* viewPuzzle(){
    yield put({type: modalTypes.DESTROY_MODAL, id: "solve-puzzle"});
};

export default () => [
    watchInitializeSolvePuzzle(),
    watchChangeValue(),
    watchDeleteValue(),
    watchViewPuzzle(),
];