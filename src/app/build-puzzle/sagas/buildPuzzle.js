import {types as buildPuzzleTypes} from ".."
import {put, select, call, takeEvery} from "redux-saga/effects";
import apiAxios from "../../../config/axios";
import api from "../../../config/api";
import solve from '@mattflow/sudoku-solver';
import "../../utils/utils";
import {orderByRows} from "../../utils/utils";

const getBuildPuzzleState = (state) => state.buildPuzzle;
const getUserState = (state) => state.user;
const getFormState = (state) => state.form;

export function* watchChangeValue() {
    yield takeEvery(buildPuzzleTypes.CELL_VALUE_CHANGE, validateCellValueChange);
};

export function* watchDeleteValue() {
    yield takeEvery(buildPuzzleTypes.CELL_VALUE_DELETE, validateCellValueChange);
};

export function* validateCellValueChange(){
    yield put({type: buildPuzzleTypes.CELL_VALUE_CHANGE_INITIALIZE})
    const buildPuzzleState = yield select(getBuildPuzzleState);

    const {cells} = buildPuzzleState;

    try {
        const response = yield call(apiAxios.post, api.checkPuzzle(), {cells: cells});
        const conflictCells = response.data["conflictCells"];
        yield put({type: buildPuzzleTypes.UPDATE_CONFLICT_CELLS, conflictCells});
    } catch (error) {
        console.log(error);
    }
};

export function* watchCreatePuzzleRequest() {
    yield takeEvery(buildPuzzleTypes.CREATE_PUZZLE_REQUEST, createPuzzle);
};

export function* createPuzzle(){

    const buildPuzzleState = yield select(getBuildPuzzleState);
    const userState = yield select(getUserState);
    const formState = yield select(getFormState);

    const cells = buildPuzzleState.cells;

    const date = new Date();

    const offset = date.getTimezoneOffset()
    const offsetDate = new Date(date.getTime() - (offset*60*1000))

    const cellsByRows = orderByRows(cells);



    if (!formState.values['puzzle-name']) {
        yield put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: "A puzzle name is required"}});
    }

    else if (!formState.values['puzzle-rules']) {
        yield put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: "A rule set is required"}});
    }

    else if (buildPuzzleState.conflictCells.length !== 0) {
        yield put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: "Conflicts exist with given digits."}});
    }

    else {
        try {
            const solution = solve(cellsByRows, {emptyValue: "_", maxIterations: 1000000});
        } catch (e) {
            yield put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: e.message}});
        }
        try {
            const createResponse = yield call(apiAxios.post, api.createPuzzle(),
                {
                    name: formState.values['puzzle-name'],
                    creator: userState.id,
                    date: offsetDate.toISOString().split('T')[0],
                    given_digits: cells,
                    cell_colors: '_________________________________________________________________________________',
                    completed: true,
                    rule_set: formState.values['puzzle-rules'],
                    diagonals: 0,
                    average_solve_time: '0:0:0',
                    average_rating: 11
                });
            } catch (e) {
            yield put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: e.response.data.message["non_field_errors"][0]}})
        }
        }
};

export default () => [
    watchChangeValue(),
    watchDeleteValue(),
    watchCreatePuzzleRequest()
];