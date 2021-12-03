import {expectSaga, testSaga} from "redux-saga-test-plan";
import reducer, {initialState as profileInitialState, types as profileTypes} from "../index"
import {
    confirmDelete,
    deleteSavedPuzzle, deleteSavedSolution,
    followUnfollow,
    getProfileState,
    getUserState,
    initializeProfile,
    resumeSavedPuzzle, resumeSavedSolution,
    selectCompletedPuzzle,
    selectCreatedPuzzle,
    selectSavedPuzzle,
    selectSavedSolution,
    solvePuzzle, viewLeaderboard,
    watchConfirmDelete,
    watchDeleteSavedPuzzle, watchDeleteSavedSolution,
    watchFollowUnfollow,
    watchInitializeProfile,
    watchResumeSavedPuzzle, watchResumeSavedSolution,
    watchSelectCompletedPuzzle,
    watchSelectCreatedPuzzle,
    watchSelectSavedPuzzle,
    watchSelectSavedSolution,
    watchSolvePuzzle, watchViewLeaderboard
} from "../sagas/profile";
import apiAxios from "../../../config/axios";
import {initialState as userInitialState, types as userTypes} from "../../user";
import {initialState as formInitialState} from "../../form";
import api from "../../../config/api";
import hashids from "../../../config/hashids";
import {types as modalTypes} from "../../modal";
import {push} from "react-router-redux";
import {types as buildPuzzleTypes} from "../../build-puzzle";
import {getFormState} from "../../user/sagas/user";
import {types as solvePuzzleTypes} from "../../solve-puzzle";
import {types as timerTypes} from "../../timer";

const mockCalls = (effect, next) => {
    if (effect.fn === apiAxios.get && effect.args[0].endsWith("/profile/newUser/")) {
        return {data: {createdPuzzles: [{id: 1}], savedPuzzles: [{id: 2}]}};
    }
    if (effect.fn === apiAxios.get && effect.args[0].endsWith("/puzzle/solved/9/")) {
        return {data: {leaderboard: {}}};
    }
    if (effect.fn === apiAxios.post && effect.args[0].endsWith("/puzzle/delete/")) {
        return {};
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
    if (selector === getUserState) {
        return {...userInitialState, id: 1};
    }
    if (selector === getFormState) {
        return {...formInitialState, values: {puzzleName: "test", puzzleRules: "test rules"}};
    }
}

test("initializeProfile - is triggered", () => {
    return expectSaga(watchInitializeProfile)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: profileTypes.INITIALIZE_PROFILE})
        .silentRun();
})

test("initializeProfile - execution flow", () => {
    const action = {username: "newUser"};
    testSaga(initializeProfile, action)
        .next({action: {username: "newUser"}})
        .call(apiAxios.get, api.getProfile("newUser")).next({data: {createdPuzzles: [{id: 1}], savedPuzzles: [{id: 2}]}})
        .put({type: profileTypes.INITIALIZE_PROFILE_SUCCESS, response: {createdPuzzles: [{id: hashids.encode(1)}], savedPuzzles: [{id: hashids.encode(2)}]}}).next()

        .isDone()
})

test("initializeProfile - failed call", () => {
    const action = {username: "newUser"};
    testSaga(initializeProfile, action)
        .next({action: {username: "newUser"}})
        .call(apiAxios.get, api.getProfile("newUser")).throw({message: "error"})
        .isDone()
})

test("selectSavedPuzzle - is triggered", () => {
    return expectSaga(watchSelectSavedPuzzle)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: profileTypes.SELECT_SAVED_PUZZLE})
        .silentRun();
})

test("selectSavedPuzzle - execution flow", () => {
    testSaga(selectSavedPuzzle)
        .next()
        .put({type: modalTypes.CREATE_MODAL, id: "saved-puzzle"}).next()
        .isDone()
})

test("resumeSavedPuzzle - is triggered", () => {
    return expectSaga(watchResumeSavedPuzzle)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: profileTypes.RESUME_SAVED_PUZZLE})
        .silentRun();
})

test("resumeSavedPuzzle - execution flow", () => {
    testSaga(resumeSavedPuzzle)
        .next()
        .select(getProfileState).next({selectedPuzzle: {id: 1}})
        .put({type: buildPuzzleTypes.LOAD_SAVED_PUZZLE, selectedPuzzle: {id: 1}}).next()
        .put({type: buildPuzzleTypes.SHOULD_LOAD_PUZZLE}).next()
        .put(push("/puzzle/build/")).next()
        .isDone()
})

test("solvePuzzle - is triggered", () => {
    return expectSaga(watchSolvePuzzle)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: profileTypes.SOLVE_PUZZLE})
        .silentRun();
})

test("solvePuzzle - execution flow", () => {
    testSaga(solvePuzzle)
        .next()
        .select(getProfileState).next({selectedPuzzle: {id: 1}})
        .put({type: modalTypes.DESTROY_MODAL, id: "created-puzzle"}).next()
        .put(push("/puzzle/solve/1/")).next()
        .isDone()
})

test("selectCreatedPuzzle - is triggered", () => {
    return expectSaga(watchSelectCreatedPuzzle)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: profileTypes.SELECT_CREATED_PUZZLE})
        .silentRun();
})

test("selectCreatedPuzzle - execution flow", () => {
    testSaga(selectCreatedPuzzle)
        .next()
        .put({type: modalTypes.CREATE_MODAL, id: "created-puzzle"}).next()
        .isDone()
})

test("selectCompletedPuzzle - is triggered", () => {
    return expectSaga(watchSelectCompletedPuzzle)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: profileTypes.SELECT_COMPLETED_PUZZLE})
        .silentRun();
})

test("selectCompletedPuzzle - execution flow", () => {
    testSaga(selectCompletedPuzzle)
        .next()
        .put({type: modalTypes.CREATE_MODAL, id: "completed-puzzle"}).next()
        .isDone()
})

test("confirmDelete - is triggered", () => {
    return expectSaga(watchConfirmDelete)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: profileTypes.CONFIRM_DELETE})
        .silentRun();
})

test("confirmDelete - execution flow", () => {
    testSaga(confirmDelete)
        .next()
        .put({type: modalTypes.CREATE_MODAL, id: "delete-confirmation"}).next()
        .isDone()
})

test("deleteSavedPuzzle - is triggered", () => {
    return expectSaga(watchDeleteSavedPuzzle)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: profileTypes.DELETE_SAVED_PUZZLE_REQUEST})
        .silentRun();
})

test("deleteSavedPuzzle - execution flow", () => {
    testSaga(deleteSavedPuzzle)
        .next()
        .select(getProfileState).next({selectedPuzzle: {id: 1}})
        .call(apiAxios.post, api.deletePuzzle(), {id: hashids.decode(1)[0]}).next()
        .put({type: profileTypes.DELETE_SAVED_PUZZLE_SUCCESS, successMessage: "Puzzle successfully deleted."}).next()
        .put({type: modalTypes.DESTROY_MODAL, id: "delete-confirmation"}).next()
        .isDone()
})

test("deleteSavedPuzzle - throw error", () => {
    testSaga(deleteSavedPuzzle)
        .next()
        .select(getProfileState).next({selectedPuzzle: {id: 1}})
        .call(apiAxios.post, api.deletePuzzle(), {id: hashids.decode(1)[0]}).throw({})
        .put({type: profileTypes.DELETE_SAVED_PUZZLE_FAILURE}).next()
        .put({type: modalTypes.DESTROY_MODAL, id: "delete-confirmation"}).next()
        .isDone()
})

test("followUnfollow - is triggered", () => {
    return expectSaga(watchFollowUnfollow)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: profileTypes.FOLLOW_OR_UNFOLLOW})
        .silentRun();
})

test("followUnfollow - follow", () => {
    const action = {id: 2};
    testSaga(followUnfollow, action)
        .next()
        .select(getUserState).next({id: 1})
        .call(apiAxios.post, api.followOrUnfollow(), {following: 2, follower: 1}).next({data: {isFollowing: false}})
        .put({type: profileTypes.FOLLOW_SUCCESS}).next()
        .put({type: userTypes.FOLLOW_SUCCESS, following: 2}).next()
        .isDone()
})

test("followUnfollow - unfollow", () => {
    const action = {id: 2};
    testSaga(followUnfollow, action)
        .next()
        .select(getUserState).next({id: 1})
        .call(apiAxios.post, api.followOrUnfollow(), {following: 2, follower: 1}).next({data: {isFollowing: true}})
        .put({type: profileTypes.UNFOLLOW_SUCCESS}).next()
        .put({type: userTypes.UNFOLLOW_SUCCESS, following: 2}).next()
        .isDone()
})

test("followUnfollow - throw error", () => {
    const action = {id: 2};
    testSaga(followUnfollow, action)
        .next()
        .select(getUserState).next({id: 1})
        .call(apiAxios.post, api.followOrUnfollow(), {following: 2, follower: 1}).throw({message: "error"})
        .put({type: profileTypes.FOLLOW_OR_UNFOLLOW_ERROR, error: {message: "Could not complete the request. Please try again."}}).next()
        .isDone()
})

test("selectSavedSolution - is triggered", () => {
    return expectSaga(watchSelectSavedSolution)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: profileTypes.SELECT_SAVED_SOLUTION})
        .silentRun();
})

test("selectSavedSolution - execution flow", () => {
    testSaga(selectSavedSolution)
        .next()
        .put({type: modalTypes.CREATE_MODAL, id: "saved-solution"}).next()

        .isDone()
})

test("resumeSavedSolution - is triggered", () => {
    return expectSaga(watchResumeSavedSolution)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: profileTypes.RESUME_SAVED_SOLUTION})
        .silentRun();
})

test("resumeSavedSolution - execution flow", () => {
    testSaga(resumeSavedSolution)
        .next()
        .select(getProfileState).next({selectedPuzzle: {time: 100, saved_solution: {id: 7}}})
        .put({type: solvePuzzleTypes.LOAD_SAVED_SOLUTION, selectedPuzzle: {time: 100, saved_solution: {id: 7}}}).next()
        .put({type: timerTypes.SET_TIME, time: 100}).next()
        .put(push("/puzzle/solve/" + hashids.encode(7))).next()

        .isDone()
})

test("deleteSavedSolution - is triggered", () => {
    return expectSaga(watchDeleteSavedSolution)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: profileTypes.DELETE_SAVED_SOLUTION_REQUEST})
        .silentRun();
})

test("deleteSavedSolution - execution flow", () => {
    testSaga(deleteSavedSolution)
        .next()
        .select(getProfileState).next({selectedPuzzle: {id: 1, time: 100, saved_solution: {id: 7}}})
        .call(apiAxios.post, api.deleteSolution(), {id: 1}).next()
        .put({type: profileTypes.DELETE_SAVED_SOLUTION_SUCCESS, id: 1, successMessage: "Solution successfully deleted."}).next()
        .put({type: modalTypes.DESTROY_MODAL, id: "delete-confirmation"}).next()

        .isDone()
})

test("deleteSavedSolution - throw error", () => {
    testSaga(deleteSavedSolution)
        .next()
        .select(getProfileState).next({selectedPuzzle: {id: 1, time: 100, saved_solution: {id: 7}}})
        .call(apiAxios.post, api.deleteSolution(), {id: 1}).throw({message: "message"})
        .put({type: profileTypes.DELETE_SAVED_SOLUTION_FAILURE}).next()
        .put({type: modalTypes.DESTROY_MODAL, id: "delete-confirmation"}).next()

        .isDone()
})

test("viewLeaderboard - is triggered", () => {
    return expectSaga(watchViewLeaderboard)
        .withReducer(reducer)
        .provide({call: mockCalls, select: mockSelectors})
        .dispatch({type: profileTypes.VIEW_LEADERBOARD})
        .silentRun();
})

test("viewLeaderboard - execution flow", () => {
    testSaga(viewLeaderboard)
        .next()
        .select(getProfileState).next({selectedPuzzle: {id: 1, time: 100, saved_solution: {id: 7}, puzzle: 9}})
        .call(apiAxios.get, api.getPuzzle(9)).next({data: {leaderboard: "leaderboard"}})
        .put({type: profileTypes.VIEW_LEADERBOARD_SUCCESS, leaderboard: "leaderboard"}).next()
        .put({type: modalTypes.DESTROY_MODAL, id: "completed-puzzle"}).next()
        .put({type: modalTypes.CREATE_MODAL, id: "completed-puzzle-leaderboard"}).next()

        .isDone()
})

test("viewLeaderboard - throw error", () => {
    testSaga(viewLeaderboard)
        .next()
        .select(getProfileState).next({selectedPuzzle: {id: 1, time: 100, saved_solution: {id: 7}, puzzle: 9}})
        .call(apiAxios.get, api.getPuzzle(9)).throw({message: "message"})
        .put({type: profileTypes.DELETE_SAVED_SOLUTION_FAILURE}).next()
        .put({type: modalTypes.DESTROY_MODAL, id: "delete-confirmation"}).next()

        .isDone()
})