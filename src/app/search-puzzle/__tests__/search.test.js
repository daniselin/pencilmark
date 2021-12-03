import apiAxios from "../../../config/axios";
import {getProfileState, getUserState} from "../../profile/sagas/profile";
import reducer, {initialState as profileInitialState} from "../../profile";
import {initialState as userInitialState} from "../../user";
import {getFormState} from "../../user/sagas/user";
import {initialState as formInitialState} from "../../form";
import {expectSaga, testSaga} from "redux-saga-test-plan";
import api from "../../../config/api";
import {
    initializeSearch,
    solvePuzzle,
    submitSearch,
    watchInitializeSearch,
    watchSolvePuzzle,
    watchSubmitSearch,
    getPuzzleState, selectCreatedPuzzle, watchSelectCreatedPuzzle
} from "../sagas/search";
import {types as puzzleTypes, types as searchTypes} from "../index";
import {push} from "react-router-redux";
import hashids from "../../../config/hashids";
import {types as modalTypes} from "../../modal";

const mockCalls = (effect, next) => {
    if (effect.fn === apiAxios.get && effect.args[0].endsWith("/profile/newUser/")) {
        return {data: {createdPuzzles: [{id: 1}], savedPuzzles: [{id: 2}]}};
    }
    if (effect.fn === apiAxios.get && effect.args[0].endsWith("/puzzle/solved/9/")) {
        return {data: {leaderboard: {}}};
    }
    if (effect.fn === apiAxios.post && effect.args[0].endsWith("/puzzle/search/")) {
        return {data: {searchResults: [{puzzle: 'puzzleName'}]}};
    }
    if (effect.fn === apiAxios.post && effect.args[0].endsWith("/solution/delete/")) {
        return {};
    }

    return next();
}

const mockSelectors = ({selector}, next) => {
    if (selector === getProfileState) {
        return {...profileInitialState, selectedPuzzle: {id: 1, saved_solution: {id: 7}}};
    }
    if (selector === getPuzzleState) {
        return {...profileInitialState, selectedPuzzle: {id: 1, saved_solution: {id: 7}}};
    }
    if (selector === getUserState) {
        return {...userInitialState, id: 1};
    }
    if (selector === getFormState) {
        return {...formInitialState, values: {puzzleName: "test", puzzleRules: "test rules"}};
    }
}

test("initializeSearch - is triggered", () => {
    return expectSaga(watchInitializeSearch)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: searchTypes.INITIALIZE_SEARCH})
        .silentRun();
})

test("initializeSearch - execution flow", () => {
    const action = {query: "newUser"};
    testSaga(initializeSearch, action)
        .next({action: {username: "newUser"}})
        .call(submitSearch, {query: 'newUser'}).next()
        .put({type: puzzleTypes.FINISH_INITIALIZE_SEARCH}).next()

        .isDone()
})

test("submitSearch - is triggered", () => {
    return expectSaga(watchSubmitSearch)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: searchTypes.SUBMIT_SEARCH})
        .silentRun();
})

test("submitSearch - execution flow", () => {
    const action = {query: "newUser"};
    testSaga(submitSearch, action)
        .next({action: {username: "newUser"}})
        .put({type: puzzleTypes.SUBMIT_SEARCH_REQUEST}).next()
        .put(push('?q=newUser')).next()
        .call(apiAxios.post, api.searchPuzzles(), {query: "newUser"}).next({data: {searchResults: [{puzzle: 'puzzleName'}]}})
        .put({type:puzzleTypes.SUBMIT_SEARCH_SUCCESS, results: [{puzzle: 'puzzleName'}]}).next()

        .isDone()
})

test("submitSearch - throw error", () => {
    const action = {query: "newUser"};
    testSaga(submitSearch, action)
        .next({action: {username: "newUser"}})
        .put({type: puzzleTypes.SUBMIT_SEARCH_REQUEST}).next()
        .put(push('?q=newUser')).next()
        .call(apiAxios.post, api.searchPuzzles(), {query: "newUser"}).throw({message: 'message'})
        .put({type: puzzleTypes.SUBMIT_SEARCH_FAILURE, message: 'message'}).next()

        .isDone()
})

test("solvePuzzle - is triggered", () => {
    return expectSaga(watchSolvePuzzle)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: searchTypes.SOLVE_PUZZLE})
        .silentRun();
})

test("solvePuzzle - execution flow", () => {
    testSaga(solvePuzzle)
        .next()
        .select(getPuzzleState).next({selectedPuzzle: {id: 1}})
        .put(push("/puzzle/solve/" + hashids.encode(1) + "/")).next()
        .put({type: modalTypes.DESTROY_MODAL, id: "created-puzzle"}).next()
        .put({type: puzzleTypes.RESET_PUZZLE_SEARCH}).next()

        .isDone()
})

test("selectCreatedPuzzle - is triggered", () => {
    return expectSaga(watchSelectCreatedPuzzle)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: searchTypes.SELECT_CREATED_PUZZLE})
        .silentRun();
})

test("selectCreatedPuzzle - execution flow", () => {
    testSaga(selectCreatedPuzzle)
        .next()
        .put({type: modalTypes.CREATE_MODAL, id: "search-puzzle"}).next()

        .isDone()
})