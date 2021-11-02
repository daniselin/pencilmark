import {expectSaga, testSaga} from "redux-saga-test-plan";
import {
    createPuzzle,
    getBuildPuzzleState,
    getFormState,
    getUserState,
    initializeBuildPuzzle, rebuildPuzzle,
    savePuzzle,
    startNewPuzzle,
    validateCellValueChange,
    watchChangeValue,
    watchCreatePuzzleRequest,
    watchInitializeBuildPuzzle,
    watchRebuildPuzzle,
    watchSavePuzzleRequest,
    watchStartNewPuzzle
} from "../sagas/buildPuzzle";
import reducer, { types as buildPuzzleTypes, initialState as buildPuzzleInitialState} from "../index";
import {initialState as userInitialState} from "../../user/index";
import {initialState as formInitialState, types as formTypes} from "../../form/index";
import apiAxios from "../../../config/axios";
import api from "../../../config/api";
import {atLeast17Givens} from "../../utils";
import {push} from "react-router-redux";
import {types as modalTypes} from "../../modal";

const date = new Date();

const offset = date.getTimezoneOffset()
const offsetDate = new Date(date.getTime() - (offset * 60 * 1000))

const mockCalls = (effect, next) => {
    if (effect.fn === apiAxios.post && effect.args[0].endsWith("/puzzle/check/")) {
        return {conflictCells: []};
    }

    return next();
}

const mockSelectors = ({selector}, next) => {
    if (selector === getBuildPuzzleState) {
        return {...buildPuzzleInitialState};
    }
    if (selector === getUserState) {
        return {...userInitialState};
    }
    if (selector === getFormState) {
        return {...formInitialState, values: {puzzleName: "test", puzzleRules: "test rules"}};
    }
}

test("changeCellValue - is triggered", () => {
    return expectSaga(watchChangeValue)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: buildPuzzleTypes.CELL_VALUE_CHANGE})
        .silentRun();

})

test("deleteCellValue - is triggered", () => {
    return expectSaga(watchChangeValue)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: buildPuzzleTypes.CELL_VALUE_DELETE})
        .silentRun();

})

test("validateCellValueChange - execution flow", () => {
    testSaga(validateCellValueChange)
        .next()
        .put({type: buildPuzzleTypes.CELL_VALUE_CHANGE_INITIALIZE}).next()
        .select(getBuildPuzzleState).next({})
        .call(
            apiAxios.post,
            api.checkPuzzle(),
            {cells: undefined}
        ).next({data: {}})
        .put({type: buildPuzzleTypes.UPDATE_CONFLICT_CELLS, conflictCells: undefined}).next()


        .isDone()
})

test("validateCellValueChange - failed call", () => {
    testSaga(validateCellValueChange)
        .next()
        .put({type: buildPuzzleTypes.CELL_VALUE_CHANGE_INITIALIZE}).next()
        .select(getBuildPuzzleState).next({})
        .call(
            apiAxios.post,
            api.checkPuzzle(),
            {cells: undefined}
        ).throw({})


        .isDone()
})

test("createPuzzleRequest - is triggered", () => {
    return expectSaga(watchCreatePuzzleRequest)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: buildPuzzleTypes.CREATE_PUZZLE_REQUEST})
        .silentRun();
})

test("createPuzzle - execution flow", () => {
    testSaga(createPuzzle)
        .next()
        .select(getBuildPuzzleState).next({
        cells: "845712693317956482296348715579834261431625978682197534953271846_28463159164589327",
        loadedPuzzle: {id: 0},
        conflictCells: ""
        })
        .select(getUserState).next({username: "username"})
        .select(getFormState).next({values: {puzzleName: "testName", puzzleRules: "testRules"}})
        .call(
            apiAxios.post,
            api.createPuzzle(), {
                name: 'testName',
                creator: undefined,
                date: offsetDate.toISOString().split('T')[0],
                given_digits: '845712693317956482296348715579834261431625978682197534953271846_28463159164589327',
                solution_digits: '845712693317956482296348715579834261431625978682197534953271846728463159164589327',
                cell_colors: '_________________________________________________________________________________',
                completed: true,
                rule_set: 'testRules',
                diagonals: 0,
                average_solve_time: '0:0:0',
                average_rating: 11,
                loaded_puzzle: 0
            }
        ).next({data: {}})
        .put(push("/user/username")).next()
        .put({type: buildPuzzleTypes.RESET_LOADED_PUZZLE}).next()
        .put({type: buildPuzzleTypes.INITIALIZE_BUILD_PUZZLE}).next()


        .isDone()
})

test("savePuzzleRequest - is triggered", () => {
    return expectSaga(watchSavePuzzleRequest)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: buildPuzzleTypes.SAVE_PUZZLE_REQUEST})
        .silentRun();
})

test("savePuzzle - execution flow", () => {


    testSaga(savePuzzle)
        .next()
        .select(getBuildPuzzleState).next({
        cells: "845712693317956482296348715579834261431625978682197534953271846_28463159164589327",
        loadedPuzzle: {id: 0},
        conflictCells: ""
    })
        .select(getUserState).next({username: "username"})
        .select(getFormState).next({values: {puzzleName: "testName", puzzleRules: "testRules"}})
        .call(
            apiAxios.post,
            api.createPuzzle(), {
                name: 'testName',
                creator: undefined,
                date: offsetDate.toISOString().split('T')[0],
                given_digits: '845712693317956482296348715579834261431625978682197534953271846_28463159164589327',
                solution_digits: '_________________________________________________________________________________',
                cell_colors: '_________________________________________________________________________________',
                completed: false,
                rule_set: 'testRules',
                diagonals: 0,
                average_solve_time: '0:0:0',
                average_rating: 11,
                loaded_puzzle: 0
            }
        ).next({data: {}})
        .put(push("/user/username")).next()
        .put({type: buildPuzzleTypes.RESET_LOADED_PUZZLE}).next()
        .put({type: buildPuzzleTypes.INITIALIZE_BUILD_PUZZLE}).next()


        .isDone()
})

test("initializePuzzleRequest - is triggered", () => {
    return expectSaga(watchInitializeBuildPuzzle)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: buildPuzzleTypes.INITIALIZE_BUILD_PUZZLE})
        .silentRun();
})

test("initializeBuildPuzzle - execution flow", () => {
    testSaga(initializeBuildPuzzle)
        .next()
        .select(getBuildPuzzleState).next({
        cells: "845712693317956482296348715579834261431625978682197534953271846_28463159164589327",
        loadedPuzzle: 0,
        conflictCells: ""
    })
        .put({type: formTypes.RESET_FORM}).next()
        .put({type: buildPuzzleTypes.SET_LOADED_PUZZLE}).next()
        .put({type: buildPuzzleTypes.SHOULD_NOT_LOAD_PUZZLE}).next()
        .call(validateCellValueChange).next()
        .put({type: buildPuzzleTypes.INITIALIZE_BUILD_PUZZLE_SUCCESS}).next()


        .isDone()
})

test("startNewPuzzle - is triggered", () => {
    return expectSaga(watchStartNewPuzzle)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: buildPuzzleTypes.START_NEW_PUZZLE})
        .silentRun();
})

test("startNewPuzzle - execution flow", () => {
    testSaga(startNewPuzzle)
        .next()
        .put({type: buildPuzzleTypes.SET_IS_LOADING}).next()
        .put({type: formTypes.RESET_FORM}).next()
        .put({type: buildPuzzleTypes.INITIALIZE_BUILD_PUZZLE_SUCCESS}).next()

        .isDone()
})

test("watchRebuildPuzzle - is triggered", () => {
    document.body.innerHTML = `
    <TextField id="puzzleName" defaultValue="puzzleName"/>
    <TextField id="puzzleRules" defaultValue="puzzleName"/>`;
    
    return expectSaga(watchRebuildPuzzle)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: buildPuzzleTypes.REBUILD_PUZZLE})
        .silentRun();
})

test("rebuildPuzzle - execution flow", () => {
    document.body.innerHTML = `
    <TextField id="puzzleName" defaultValue="puzzleName"/>
    <TextField id="puzzleRules" defaultValue="puzzleName"/>`
    ;

    testSaga(rebuildPuzzle)
        .next()
        .put({type: formTypes.UPDATE_VALUE, name: "puzzleName", value: undefined}).next()
        .put({type: formTypes.UPDATE_VALUE, name: "puzzleRules", value: undefined}).next()
        .put({type: modalTypes.DESTROY_MODAL, id: "build-puzzle"}).next()

        .isDone()
})