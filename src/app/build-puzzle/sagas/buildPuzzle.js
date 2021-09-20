import {types as buildPuzzleTypes} from ".."
import {types as formTypes} from "../../form"
import {call, put, select, takeEvery} from "redux-saga/effects";
import apiAxios from "../../../config/axios";
import api from "../../../config/api";
import {solveClassicSudoku} from '@cedwards036/sudoku-solver';
import "../../utils/utils";
import {
    atLeast17Givens,
    orderByCols,
    orderByRows,
    stringsToIntegers,
    underscoresToZeroes,
    zeroesToUnderscores
} from "../../utils/utils";
import {push} from "react-router-redux";

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

    if (!atLeast17Givens(cells)) {
        yield put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: "At least 17 digits must be given."}});
    } else {
        const loadedPuzzle = buildPuzzleState.loadedPuzzle;

        const date = new Date();

        const offset = date.getTimezoneOffset()
        const offsetDate = new Date(date.getTime() - (offset * 60 * 1000))

        const cellsByRows = underscoresToZeroes(orderByRows(cells));
        const cellsByRowsArray = stringsToIntegers(cellsByRows.split(""));
        let cellsByRowsFullArray = [];

        for (let i = 0, j = cellsByRowsArray.length; i < j; i += 9) {
            let slice = cellsByRowsArray.slice(i, i + 9);
            cellsByRowsFullArray.push(slice);
        }
        if (!formState.values['puzzleName']) {
            yield put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: "A puzzle name is required"}});
        } else if (!formState.values['puzzleRules']) {
            yield put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: "A rule set is required"}});
        } else if (buildPuzzleState.conflictCells.length !== 0) {
            yield put({
                type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE,
                error: {message: "Conflicts exist with given digits."}
            });
        } else {
            try {
                let solution = solveClassicSudoku(cellsByRowsFullArray);
                let solutionString = '';

                console.log(solution);

                if (solution.length !== 1) {
                    yield put({
                        type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE,
                        error: {message: "No unique solution found"}
                    });

                } else {
                    for (let row in solution[0]) {
                        console.log(row);
                        solutionString += solution[0][row].join('');
                    }

                    const fullSolution = zeroesToUnderscores(orderByCols(solutionString));
                    const createResponse = yield call(apiAxios.post, api.createPuzzle(),
                        {
                            name: formState.values['puzzleName'],
                            creator: userState.id,
                            date: offsetDate.toISOString().split('T')[0],
                            given_digits: cells,
                            solution_digits: fullSolution,
                            cell_colors: '_________________________________________________________________________________',
                            completed: true,
                            rule_set: formState.values['puzzleRules'],
                            diagonals: 0,
                            average_solve_time: '0:0:0',
                            average_rating: 11,
                            loaded_puzzle: loadedPuzzle.id
                        });
                    yield put(push("/user/" + userState.username));
                }
            }
            catch (e) {
                    (e.response ?
                        yield put({
                            type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE,
                            error: {message: e.response.data.message["non_field_errors"][0]}
                        })
                        :
                        yield put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: e.message}}));
                    console.log(e);
                }
            }
        }
};

export function* watchSavePuzzleRequest() {
    yield takeEvery(buildPuzzleTypes.SAVE_PUZZLE_REQUEST, savePuzzle);
};

export function* savePuzzle(){

    const buildPuzzleState = yield select(getBuildPuzzleState);
    const userState = yield select(getUserState);
    const formState = yield select(getFormState);

    const cells = buildPuzzleState.cells;
    const loadedPuzzle = buildPuzzleState.loadedPuzzle;

    const date = new Date();

    const offset = date.getTimezoneOffset()
    const offsetDate = new Date(date.getTime() - (offset*60*1000))

    if (!formState.values['puzzleName']) {
        yield put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: "A puzzle name is required"}});
    }

    else {
        try {
            const createResponse = yield call(apiAxios.post, api.createPuzzle(),
                {
                    name: formState.values['puzzleName'],
                    creator: userState.id,
                    date: offsetDate.toISOString().split('T')[0],
                    given_digits: cells,
                    solution_digits: '_________________________________________________________________________________',
                    cell_colors: '_________________________________________________________________________________',
                    completed: false,
                    rule_set: formState.values['puzzleRules'] ? formState.values['puzzleRules'] : "No rules given",
                    diagonals: 0,
                    average_solve_time: '0:0:0',
                    average_rating: 11,
                    loaded_puzzle: loadedPuzzle.id
                });
            yield put(push("/user/" + userState.username));
            } catch (e) {
            yield put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: e.response.data.message["non_field_errors"][0]}})
        }
        }
};

export function* watchInitializeBuildPuzzle() {
    yield takeEvery(buildPuzzleTypes.INITIALIZE_BUILD_PUZZLE, initializeBuildPuzzle);
};

export function* initializeBuildPuzzle(){
    const buildPuzzleState = yield select(getBuildPuzzleState);
    const loadedPuzzle = buildPuzzleState.loadedPuzzle;
    yield put({type: formTypes.UPDATE_VALUE, name: "puzzleName", value: loadedPuzzle.name})
    yield put({type: formTypes.UPDATE_VALUE, name: "puzzleRules", value: loadedPuzzle.rule_set})
    yield call(validateCellValueChange);
};



export default () => [
    watchChangeValue(),
    watchDeleteValue(),
    watchCreatePuzzleRequest(),
    watchSavePuzzleRequest(),
    watchInitializeBuildPuzzle()
];