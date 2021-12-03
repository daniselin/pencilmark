import apiAxios from "../../../config/axios";
import {
    completePuzzle,
    getSolvePuzzleState,
    getTimerState,
    getUserState,
    initializeSolvePuzzle, savePuzzle,
    validateCellValueChangeSolve, viewPuzzle,
    watchChangeValue, watchCompletePuzzleRequest,
    watchDeleteValue,
    watchInitializeSolvePuzzle, watchSavePuzzleRequest, watchViewPuzzle
} from "../sagas/solvePuzzle";
import {initialState as solvePuzzleInitialState, types as solvePuzzleTypes} from "../index";
import {initialState as userInitialState} from "../../user";
import {getFormState} from "../../user/sagas/user";
import {initialState as formInitialState} from "../../form";
import {initialState as timerInitialState, types as timerTypes} from "../../timer";
import {expectSaga, testSaga} from "redux-saga-test-plan";
import reducer from "../../profile";
import {types as solveTypes} from "../../build-puzzle";
import api from "../../../config/api";
import {types as modalTypes} from "../../modal";
import hashids from "../../../config/hashids";

const mockCalls = (effect, next) => {
    if (effect.fn === apiAxios.get && effect.args[0].endsWith("/puzzle/1/")) {
        return {data: {puzzle: {id: 1}}};
    }
    if (effect.fn === apiAxios.get && effect.args[0].endsWith("/puzzle/solved/9/")) {
        return {data: {leaderboard: {}}};
    }
    if (effect.fn === apiAxios.post && effect.args[0].endsWith("/puzzle/check/")) {
        return {data: {conflictCells: []}};
    }
    if (effect.fn === apiAxios.post && effect.args[0].endsWith("/puzzle/solved/2/")) {
        return {};
    }
    if (effect.fn === apiAxios.post && effect.args[0].endsWith("/puzzle/save/")) {
        return {};
    }

    return next();
}

const mockSelectors = ({selector}, next) => {
    if (selector === getSolvePuzzleState) {
        return {...solvePuzzleInitialState};
    }
    if (selector === getUserState) {
        return {...userInitialState, id: 1};
    }
    if (selector === getFormState) {
        return {...formInitialState, values: {puzzleName: "test", puzzleRules: "test rules"}};
    }
    if (selector === getTimerState) {
        return {...timerInitialState, isOn: true};
    }
}

test("validateCellValueChangeSolve - is triggered", () => {
    return expectSaga(watchChangeValue)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: solveTypes.CELL_VALUE_CHANGE})
        .silentRun();
})

test("validateCellValueChangeSolve - is triggered by delete", () => {
    return expectSaga(watchDeleteValue)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: solveTypes.CELL_VALUE_DELETE})
        .silentRun();
})

test("validateCellValueChangeSolve - execution flow", () => {
    testSaga(validateCellValueChangeSolve).next()
        .put({type: solvePuzzleTypes.CELL_VALUE_CHANGE_INITIALIZE}).next()
        .select(getSolvePuzzleState).next({currentDigits: "123456789", enterMode: "digit", loadedPuzzle: {solution_digits: "123456789"}})
        .select(getTimerState).next({isOn: true})
        .call(apiAxios.post, api.checkPuzzle(), {cells: "123456789"}).next({data: {conflictCells: []}})
        .put({type: solvePuzzleTypes.UPDATE_CONFLICT_CELLS, conflictCells: []}).next()
        .put({type: timerTypes.STOP_TIMER}).next()
        .put({type: modalTypes.CREATE_MODAL, id: "solve-puzzle"}).next()

        .isDone()
})

test("validateCellValueChangeSolve - throw error", () => {
    testSaga(validateCellValueChangeSolve).next()
        .put({type: solvePuzzleTypes.CELL_VALUE_CHANGE_INITIALIZE}).next()
        .select(getSolvePuzzleState).next({currentDigits: "123456789", enterMode: "digit", loadedPuzzle: {solution_digits: "123456789"}})
        .select(getTimerState).next({isOn: true})
        .call(apiAxios.post, api.checkPuzzle(), {cells: "123456789"}).throw({message: "message"})

        .isDone()
})

test("initializeSolvePuzzle - is triggered", () => {
    return expectSaga(watchInitializeSolvePuzzle)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: solvePuzzleTypes.INITIALIZE_SOLVE_PUZZLE})
        .silentRun();
})

test("initializeSolvePuzzle - execution flow - start timer", () => {
    const action = {id: hashids.encode(1)}
    testSaga(initializeSolvePuzzle, action).next()
        .select(getSolvePuzzleState).next({currentDigits: "123456789", enterMode: "digit", loadedPuzzle: {solution_digits: "123456789"}, savedPuzzle: true})
        .call(apiAxios.get, api.getPuzzle("1")).next({data: {puzzle: {id: 1}}})
        .put({type: solvePuzzleTypes.INITIALIZE_SOLVE_PUZZLE_SUCCESS, puzzle: {puzzle: {id: hashids.encode(1)}}}).next()
        .put({type: timerTypes.START_TIMER}).next()


        .isDone()
})

test("initializeSolvePuzzle - execution flow - reset timer", () => {
    const action = {id: hashids.encode(1)}
    testSaga(initializeSolvePuzzle, action).next()
        .select(getSolvePuzzleState).next({currentDigits: "123456789", enterMode: "digit", loadedPuzzle: {solution_digits: "123456789"}, savedPuzzle: false})
        .call(apiAxios.get, api.getPuzzle("1")).next({data: {puzzle: {id: 1}}})
        .put({type: solvePuzzleTypes.INITIALIZE_SOLVE_PUZZLE_SUCCESS, puzzle: {puzzle: {id: hashids.encode(1)}}}).next()
        .put({type: timerTypes.RESET_TIMER}).next()


        .isDone()
})

test("viewPuzzle - is triggered", () => {
    return expectSaga(watchViewPuzzle)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: solvePuzzleTypes.VIEW_PUZZLE})
        .silentRun();
})

test("viewPuzzle - execution flow", () => {
    testSaga(viewPuzzle).next()
        .put({type: modalTypes.DESTROY_MODAL, id: "solve-puzzle"}).next()


        .isDone()
})

test("completePuzzle - is triggered", () => {
    return expectSaga(watchCompletePuzzleRequest)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: solvePuzzleTypes.COMPLETE_PUZZLE_REQUEST})
        .silentRun();
})

test("completePuzzle - execution flow", () => {
    const date = new Date();

    const offset = date.getTimezoneOffset();
    const offsetDate = new Date(date.getTime() - (offset * 60 * 1000));
    testSaga(completePuzzle).next()
        .select(getSolvePuzzleState).next({
        loadedPuzzle: {
            name: "loadedPuzzle",
            id: hashids.encode(2),
            given_digits: "123456789",
        },
        rating: 5})
        .select(getUserState).next({id: 7})
        .select(getTimerState).next({time: 17})
        .call(apiAxios.post, api.completePuzzle(2), {
            name: "loadedPuzzle",
            user: 7,
            time: 17,
            score: 10,
            rating: 5,
            date: offsetDate.toISOString().split('T')[0],
            shared: false,
            given_digits: "123456789"
        }).next()


        .isDone()
})

test("completePuzzle - throw error", () => {
    const date = new Date();

    const offset = date.getTimezoneOffset();
    const offsetDate = new Date(date.getTime() - (offset * 60 * 1000));
    testSaga(completePuzzle).next()
        .select(getSolvePuzzleState).next({
        loadedPuzzle: {
            name: "loadedPuzzle",
            id: hashids.encode(2),
            given_digits: "123456789",
        },
        rating: 5})
        .select(getUserState).next({id: 7})
        .select(getTimerState).next({time: 17})
        .call(apiAxios.post, api.completePuzzle(2), {
            name: "loadedPuzzle",
            user: 7,
            time: 17,
            score: 10,
            rating: 5,
            date: offsetDate.toISOString().split('T')[0],
            shared: false,
            given_digits: "123456789"
        }).throw()


        .isDone()
})

test("savePuzzle - is triggered", () => {
    return expectSaga(watchSavePuzzleRequest)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: solvePuzzleTypes.SAVE_PUZZLE_REQUEST})
        .silentRun();
})

test("savePuzzle - execution flow", () => {
    const date = new Date();

    const offset = date.getTimezoneOffset();
    const offsetDate = new Date(date.getTime() - (offset * 60 * 1000));
    testSaga(savePuzzle).next()
        .select(getSolvePuzzleState).next({
        loadedPuzzle: {
            name: "loadedPuzzle",
            id: hashids.encode(2),
            given_digits: "123456789",
        },
        currentDigits: "987654321",
        cornerDigits: 'cornerDigits',
        centerDigits: 'centerDigits',
        cellColors: 'cellColors'
    })
        .select(getUserState).next({id: 7})
        .select(getTimerState).next({time: 17})
        .call(apiAxios.post, api.savePuzzle(), {
            puzzle: 2,
            digits: '987654321',
            cell_colors: 'cellColors',
            center_digits: 'centerDigits',
            corner_digits: 'cornerDigits',
            user: 7,
            time: 17,
            date: offsetDate.toISOString().split('T')[0],
        }).next()
        .put({type: solvePuzzleTypes.SAVE_PUZZLE_SUCCESS, successMessage: "Puzzle solution saved."}).next()


        .isDone()
})

test("savePuzzle - throw error", () => {
    const date = new Date();

    const offset = date.getTimezoneOffset();
    const offsetDate = new Date(date.getTime() - (offset * 60 * 1000));
    testSaga(savePuzzle).next()
        .select(getSolvePuzzleState).next({
        loadedPuzzle: {
            name: "loadedPuzzle",
            id: hashids.encode(2),
            given_digits: "123456789",
        },
        currentDigits: "987654321",
        cornerDigits: 'cornerDigits',
        centerDigits: 'centerDigits',
        cellColors: 'cellColors'
    })
        .select(getUserState).next({id: 7})
        .select(getTimerState).next({time: 17})
        .call(apiAxios.post, api.savePuzzle(), {
            puzzle: 2,
            digits: '987654321',
            cell_colors: 'cellColors',
            center_digits: 'centerDigits',
            corner_digits: 'cornerDigits',
            user: 7,
            time: 17,
            date: offsetDate.toISOString().split('T')[0],
        }).throw({message: 'message'})
        .put({type: solvePuzzleTypes.SAVE_PUZZLE_FAILURE, errorMessage: "message"}).next()


        .isDone()
})