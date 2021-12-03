import {expectSaga, testSaga} from "redux-saga-test-plan";
import {
    controlCellClick,
    controlDragCell,
    createPuzzle, dragCell,
    getBuildPuzzleState,
    getFormState,
    getUserState,
    initializeBuildPuzzle, initializeControlDragCell, rebuildPuzzle,
    savePuzzle,
    startNewPuzzle, validateCells,
    validateCellValueChange,
    watchChangeValue, watchControlClickCell, watchControlDragCell,
    watchCreatePuzzleRequest, watchDeleteValue, watchDragCell,
    watchInitializeBuildPuzzle, watchInitializeControlDragCell,
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

beforeEach(() => {
    window.location.href = `/puzzle/build`;
});

test("changeCellValue - is triggered", () => {
    return expectSaga(watchChangeValue)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: buildPuzzleTypes.CELL_VALUE_CHANGE})
        .silentRun();

})

test("deleteCellValue - is triggered", () => {
    return expectSaga(watchDeleteValue)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: buildPuzzleTypes.CELL_VALUE_DELETE})
        .silentRun();
})

test("validateCellValueChange - execution flow", () => {
    const action = {newValue: 1};
    testSaga(validateCellValueChange, action)
        .next({action: {newValue: 1}})
        .put({type: buildPuzzleTypes.CELL_VALUE_CHANGE_INITIALIZE}).next()
        .put({type: buildPuzzleTypes.CELL_VALUE_CHANGE_VALUES, newValue: 1}).next()
        .call(
            validateCells
        ).next()


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

test("createPuzzle - error", () => {
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
        ).throw({response: {data: {message: {"non_field_errors": "message"}}}})
        .put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: "message"}}).next()


        .isDone()
})

test("createPuzzle - no puzzle name", () => {
    testSaga(createPuzzle)
        .next()
        .select(getBuildPuzzleState).next({
        cells: "845712693317956482296348715579834261431625978682197534953271846_28463159164589327",
        loadedPuzzle: {id: 0},
        conflictCells: ""
        })
        .select(getUserState).next({username: "username"})
        .select(getFormState).next({values: {puzzleRules: "testRules"}})
        .put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: 'A puzzle name is required'}}).next()


        .isDone()
})

test("createPuzzle - no puzzle rules", () => {
    testSaga(createPuzzle)
        .next()
        .select(getBuildPuzzleState).next({
        cells: "845712693317956482296348715579834261431625978682197534953271846_28463159164589327",
        loadedPuzzle: {id: 0},
        conflictCells: ""
        })
        .select(getUserState).next({username: "username"})
        .select(getFormState).next({values: {puzzleName: "testName"}})
        .put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: 'A rule set is required'}}).next()


        .isDone()
})

test("createPuzzle - conflicts exist", () => {
    testSaga(createPuzzle)
        .next()
        .select(getBuildPuzzleState).next({
        cells: "845712693317956482296348715579834261431625978682197534953271846_28463159164589327",
        loadedPuzzle: {id: 0},
        conflictCells: [1, 2, 3]
        })
        .select(getUserState).next({username: "username"})
        .select(getFormState).next({values: {puzzleName: "testName", puzzleRules: "testRules"}})
        .put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: 'Conflicts exist with given digits.'}}).next()


        .isDone()
})

test("createPuzzle - no unique solution exists", () => {
    testSaga(createPuzzle)
        .next()
        .select(getBuildPuzzleState).next({
        cells: "___________________________5_________431_________19_________1846_28463159_________",
        loadedPuzzle: {id: 0},
        conflictCells: ""
        })
        .select(getUserState).next({username: "username"})
        .select(getFormState).next({values: {puzzleName: "testName", puzzleRules: "testRules"}})
        .put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: 'No unique solution found'}}).next()


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

test("savePuzzle - no puzzle name", () => {
    testSaga(savePuzzle)
        .next()
        .select(getBuildPuzzleState).next({
        cells: "845712693317956482296348715579834261431625978682197534953271846_28463159164589327",
        loadedPuzzle: {id: 0},
        conflictCells: ""
    })
        .select(getUserState).next({username: "username"})
        .select(getFormState).next({values: {puzzleRules: "testRules"}})
        .put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: 'A puzzle name is required'}}).next()


        .isDone()
})

test("savePuzzle - error", () => {
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
        ).throw({response: {data: {message: {"non_field_errors": "message"}}}})
        .put({type: buildPuzzleTypes.CREATE_PUZZLE_FAILURE, error: {message: "message"}}).next()


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
        .put({type: buildPuzzleTypes.RESET_FOCUS}).next()
        .put({type: buildPuzzleTypes.SHOULD_NOT_LOAD_PUZZLE}).next()
        .call(validateCells).next()
        .put({type: buildPuzzleTypes.INITIALIZE_BUILD_PUZZLE_SUCCESS}).next()


        .isDone()
})

test("initializeBuildPuzzle - execution flow with loaded puzzle", () => {
    testSaga(initializeBuildPuzzle)
        .next()
        .select(getBuildPuzzleState).next({
        cells: "845712693317956482296348715579834261431625978682197534953271846_28463159164589327",
        loadedPuzzle: {name: "name", rule_set: "rules", given_digits: "111"},
        conflictCells: "",
        shouldLoadPuzzle: true
    })
        .put({type: formTypes.UPDATE_VALUE, name: "puzzleName", value: "name"}).next()
        .put({type: formTypes.UPDATE_VALUE, name: "puzzleRules", value: "rules"}).next()
        .put({type: buildPuzzleTypes.SET_LOADED_PUZZLE}).next()
        .put({type: buildPuzzleTypes.SHOULD_NOT_LOAD_PUZZLE}).next()
        .call(validateCells).next()
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

test("watchDragCell - is triggered", () => {
    return expectSaga(watchDragCell)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: buildPuzzleTypes.CELL_DRAG})
        .silentRun();
})

test("dragCell - execution flow", () => {
    const action = {box: 1, cell: 1, row: 1, col: 1};
    testSaga(dragCell, action)
        .next()
        .select(getBuildPuzzleState).next({selectedCells: []})
        .put({type: buildPuzzleTypes.ADD_SELECTED_CELL, selectedCell: {box: 1, cell: 1, row: 1, col: 1}}).next()

        .isDone()
})

test("watchControlDragCell - is triggered", () => {
    return expectSaga(watchControlDragCell)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: buildPuzzleTypes.CONTROL_CELL_DRAG})
        .silentRun();
})

test("controlDragCell - execution flow add cell", () => {
    const action = {box: 1, cell: 1, row: 1, col: 1};
    testSaga(controlDragCell, action)
        .next()
        .select(getBuildPuzzleState).next({selectedCells: [], addingCells: true})
        .put({type: buildPuzzleTypes.ADD_SELECTED_CELL, selectedCell: {box: 1, cell: 1, row: 1, col: 1}}).next()

        .isDone()
})

test("controlDragCell - execution flow remove cell", () => {
    const action = {box: 1, cell: 1, row: 1, col: 1};
    testSaga(controlDragCell, action)
        .next()
        .select(getBuildPuzzleState).next({selectedCells: [{box: 1, cell: 1, row: 1, col: 1}], addingCells: false})
        .put({type: buildPuzzleTypes.REMOVE_SELECTED_CELL, selectedCell: {box: 1, cell: 1, row: 1, col: 1}}).next()

        .isDone()
})

test("watchInitializeControlDragCell - is triggered", () => {
    return expectSaga(watchInitializeControlDragCell)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: buildPuzzleTypes.INITIALIZE_CONTROL_CELL_DRAG})
        .silentRun();
})

test("initializeControlDragCell - execution flow add cell", () => {
    const action = {box: 1, cell: 1, row: 1, col: 1};
    testSaga(initializeControlDragCell, action)
        .next()
        .select(getBuildPuzzleState).next({selectedCells: [], addingCells: true})
        .put({type: buildPuzzleTypes.ADDING_CELLS_TRUE}).next()

        .isDone()
})

test("initializeControlDragCell - execution flow remove cell", () => {
    const action = {box: 1, cell: 1, row: 1, col: 1};
    testSaga(initializeControlDragCell, action)
        .next()
        .select(getBuildPuzzleState).next({selectedCells: [{box: 1, cell: 1, row: 1, col: 1}], addingCells: false})
        .put({type: buildPuzzleTypes.ADDING_CELLS_FALSE}).next()

        .isDone()
})

test("watchControlClickCell - is triggered", () => {
    return expectSaga(watchControlClickCell)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: buildPuzzleTypes.CONTROL_CELL_CLICK})
        .silentRun();
})

test("controlClickCell - execution flow add cell", () => {
    const action = {box: 1, cell: 1, row: 1, col: 1};
    testSaga(controlCellClick, action)
        .next()
        .select(getBuildPuzzleState).next({selectedCells: [], addingCells: true})
        .put({type: buildPuzzleTypes.ADD_SELECTED_CELL, selectedCell: {box: 1, cell: 1, row: 1, col: 1}}).next()

        .isDone()
})

test("controlClickCell - execution flow remove cell", () => {
    const action = {box: 1, cell: 1, row: 1, col: 1};
    testSaga(controlCellClick, action)
        .next()
        .select(getBuildPuzzleState).next({selectedCells: [{box: 1, cell: 1, row: 1, col: 1}], addingCells: false})
        .put({type: buildPuzzleTypes.REMOVE_SELECTED_CELL, selectedCell: {box: 1, cell: 1, row: 1, col: 1}}).next()

        .isDone()
})

test("validateCells - execution flow", () => {
    const action = {box: 1, cell: 1, row: 1, col: 1};
    testSaga(validateCells, action)
        .next()
        .select(getBuildPuzzleState).next({cells: "123"})
        .call(
            apiAxios.post,
            api.checkPuzzle(),
            {cells: "123"}
        ).next({data: {conflictCells: [{cell: 1}]}})
        .put({type: buildPuzzleTypes.UPDATE_CONFLICT_CELLS, conflictCells: [{cell: 1}]}).next()

        .isDone()
})

test("validateCells - failed flow", () => {
    const action = {box: 1, cell: 1, row: 1, col: 1};
    testSaga(validateCells, action)
        .next()
        .select(getBuildPuzzleState).next({cells: "123"})
        .call(
            apiAxios.post,
            api.checkPuzzle(),
            {cells: "123"}
        ).throw({message: "error"})

        .isDone()
})