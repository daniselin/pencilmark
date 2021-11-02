import {filter} from "lodash";

export const types = {
    INITIALIZE_PROFILE: "profile/INITIALIZE_PROFILE",
    INITIALIZE_PROFILE_SUCCESS: "profile/INITIALIZE_PROFILE_SUCCESS",
    SELECT_SAVED_PUZZLE: "profile/SELECT_SAVED_PUZZLE",
    RESUME_SAVED_PUZZLE: "profile/RESUME_SAVED_PUZZLE",
    SELECT_CREATED_PUZZLE: "profile/SELECT_CREATED_PUZZLE",
    SELECT_COMPLETED_PUZZLE: "profile/SELECT_COMPLETED_PUZZLE",
    SOLVE_PUZZLE: "profile/SOLVE_PUZZLE",

    DELETE_SAVED_PUZZLE_REQUEST: "profile/DELETE_SAVED_PUZZLE_REQUEST",
    DELETE_SAVED_PUZZLE_FAILURE: "profile/DELETE_SAVED_PUZZLE_FAILURE",
    DELETE_SAVED_PUZZLE_SUCCESS: "profile/DELETE_SAVED_PUZZLE_SUCCESS",

    DELETE_CREATED_PUZZLE_REQUEST: "profile/DELETE_CREATED_PUZZLE_REQUEST",
    DELETE_CREATED_PUZZLE_FAILURE: "profile/DELETE_CREATED_PUZZLE_FAILURE",
    DELETE_CREATED_PUZZLE_SUCCESS: "profile/DELETE_CREATED_PUZZLE_SUCCESS",

    CONFIRM_DELETE: "profile/CONFIRM_DELETE",

    FOLLOW_OR_UNFOLLOW: "profile/FOLLOW_OR_UNFOLLOW",
    UNFOLLOW_SUCCESS: "profile/UNFOLLOW_SUCCESS",
    FOLLOW_SUCCESS: "profile/FOLLOW_SUCCESS",
    FOLLOW_OR_UNFOLLOW_ERROR: "profile/FOLLOW_OR_UNFOLLOW_ERROR",
}

export const initialState = {
    createdPuzzles: [],
    savedPuzzles: [],
    completedPuzzles: [],
    selectedPuzzle: {},
    profile: 0,
    isFollowing: false,
    isFollowActionLoading: false,
    isSectionLoading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.INITIALIZE_PROFILE:
            return {
                ...state,
                isLoading: true
            }
        case types.INITIALIZE_PROFILE_SUCCESS:
            return {
                ...state,
                createdPuzzles: action.response.createdPuzzles,
                savedPuzzles: action.response.savedPuzzles,
                completedPuzzles: action.response.completedPuzzles,
                profile: action.response.profile,
                isFollowing: action.response.isFollowing,
                isLoading: false
            }
        case types.SELECT_COMPLETED_PUZZLE:
            return {
                ...state,
                selectedPuzzle: state.completedPuzzles[action.key]
            }
        case types.SELECT_CREATED_PUZZLE:
            return {
                ...state,
                selectedPuzzle: state.createdPuzzles[action.key]
            }
        case types.SELECT_SAVED_PUZZLE:
            return {
                ...state,
                selectedPuzzle: state.savedPuzzles[action.key]
            }
        case types.DELETE_SAVED_PUZZLE_SUCCESS:
            const updatedSavedPuzzles = filter(state.savedPuzzles, (puzzle) => {
                return puzzle.name !== state.selectedPuzzle.name
            })
            return {
                ...state,
                savedPuzzles: updatedSavedPuzzles
            }
        case types.UNFOLLOW_SUCCESS:
            return {
                ...state,
                isFollowing: false,
                isFollowActionLoading: false,
                // profile: {
                //     ...state.profile,
                //     followers: state.profile.followers - 1
                // }
            }
        case types.FOLLOW_SUCCESS:
            return {
                ...state,
                isFollowing: true,
                isFollowActionLoading: false,
                // profile: {
                //     ...state.profile,
                //     followers: state.profile.followers + 1
                // }
            }
        case types.FOLLOW_OR_UNFOLLOW:
            return {
                ...state,
                isFollowActionLoading: true
            }
        default:
            return state
    }
}

export const actions = {
    initializeProfile: (username) => {
        return {type: types.INITIALIZE_PROFILE, username}
    },
    selectSavedPuzzle: (key) => {
        return {type: types.SELECT_SAVED_PUZZLE, key}
    },
    resumeSavedPuzzle: () => {
        return {type: types.RESUME_SAVED_PUZZLE}
    },
    selectCreatedPuzzle: (key) => {
        return {type: types.SELECT_CREATED_PUZZLE, key}
    },
    selectCompletedPuzzle: (key) => {
        return {type: types.SELECT_COMPLETED_PUZZLE, key}
    },
    solvePuzzle: (key) => {
        return {type: types.SOLVE_PUZZLE, key}
    },
    deleteSavedPuzzle: () => {
        return {type: types.DELETE_SAVED_PUZZLE_REQUEST}
    },
    deleteCreatedPuzzle: () => {
        return {type: types.DELETE_CREATED_PUZZLE_REQUEST}
    },
    confirmDelete: () => {
        return {type: types.CONFIRM_DELETE}
    },
    followUnfollow: (id) => {
        return {type: types.FOLLOW_OR_UNFOLLOW, id}
    },
}