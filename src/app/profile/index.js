import {filter} from "lodash";

export const types = {
    INITIALIZE_PROFILE: "profile/INITIALIZE_PROFILE",
    INITIALIZE_PROFILE_SUCCESS: "profile/INITIALIZE_PROFILE_SUCCESS",
    INITIALIZE_PROFILE_FAILURE: "profile/INITIALIZE_PROFILE_FAILURE",
    SELECT_SAVED_PUZZLE: "profile/SELECT_SAVED_PUZZLE",
    RESUME_SAVED_PUZZLE: "profile/RESUME_SAVED_PUZZLE",
    SELECT_SAVED_SOLUTION: "profile/SELECT_SAVED_SOLUTION",
    RESUME_SAVED_SOLUTION: "profile/RESUME_SAVED_SOLUTION",
    SELECT_CREATED_PUZZLE: "profile/SELECT_CREATED_PUZZLE",
    SELECT_COMPLETED_PUZZLE: "profile/SELECT_COMPLETED_PUZZLE",
    SOLVE_PUZZLE: "profile/SOLVE_PUZZLE",

    DELETE_SAVED_PUZZLE_REQUEST: "profile/DELETE_SAVED_PUZZLE_REQUEST",
    DELETE_SAVED_PUZZLE_FAILURE: "profile/DELETE_SAVED_PUZZLE_FAILURE",
    DELETE_SAVED_PUZZLE_SUCCESS: "profile/DELETE_SAVED_PUZZLE_SUCCESS",

    DELETE_CREATED_PUZZLE_REQUEST: "profile/DELETE_CREATED_PUZZLE_REQUEST",
    DELETE_CREATED_PUZZLE_FAILURE: "profile/DELETE_CREATED_PUZZLE_FAILURE",
    DELETE_CREATED_PUZZLE_SUCCESS: "profile/DELETE_CREATED_PUZZLE_SUCCESS",

    DELETE_SAVED_SOLUTION_REQUEST: "profile/DELETE_SAVED_SOLUTION_REQUEST",
    DELETE_SAVED_SOLUTION_FAILURE: "profile/DELETE_SAVED_SOLUTION_FAILURE",
    DELETE_SAVED_SOLUTION_SUCCESS: "profile/DELETE_SAVED_SOLUTION_SUCCESS",

    CONFIRM_DELETE: "profile/CONFIRM_DELETE",

    FOLLOW_OR_UNFOLLOW: "profile/FOLLOW_OR_UNFOLLOW",
    UNFOLLOW_SUCCESS: "profile/UNFOLLOW_SUCCESS",
    FOLLOW_SUCCESS: "profile/FOLLOW_SUCCESS",
    FOLLOW_OR_UNFOLLOW_ERROR: "profile/FOLLOW_OR_UNFOLLOW_ERROR",

    VIEW_LEADERBOARD: "profile/VIEW_LEADERBOARD",
    VIEW_LEADERBOARD_SUCCESS: "profile/VIEW_LEADERBOARD_SUCCESS",
}

export const initialState = {
    createdPuzzles: [],
    savedPuzzles: [],
    completedPuzzles: [],
    savedSolutions: [],
    selectedPuzzle: {},
    profile: 0,
    isFollowing: false,
    isFollowActionLoading: false,
    isSectionLoading: false,
    leaderboard: {}
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
                savedSolutions: action.response.savedSolutions,
                profile: action.response.profile,
                isFollowing: action.response.isFollowing,
                isLoading: false
            }
        case types.INITIALIZE_PROFILE_FAILURE:
            return {
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
        case types.SELECT_SAVED_SOLUTION:
            return {
                ...state,
                selectedPuzzle: state.savedSolutions[action.key]
            }
        case types.DELETE_SAVED_PUZZLE_SUCCESS:
            const updatedSavedPuzzles = filter(state.savedPuzzles, (puzzle) => {
                return puzzle.name !== state.selectedPuzzle.name
            })
            return {
                ...state,
                savedPuzzles: updatedSavedPuzzles
            }
        case types.DELETE_SAVED_SOLUTION_SUCCESS:
            const updatedSavedSolutions = filter(state.savedSolutions, (puzzle) => {
                return puzzle.id !== action.id
            })
            return {
                ...state,
                savedSolutions: updatedSavedSolutions
            }
        case types.UNFOLLOW_SUCCESS:
            return {
                ...state,
                isFollowing: false,
                isFollowActionLoading: false
            }
        case types.FOLLOW_SUCCESS:
            return {
                ...state,
                isFollowing: true,
                isFollowActionLoading: false
            }
        case types.FOLLOW_OR_UNFOLLOW:
            return {
                ...state,
                isFollowActionLoading: true
            }
        case types.VIEW_LEADERBOARD_SUCCESS:
            return {
                ...state,
                leaderboard: action.leaderboard
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
    selectSavedSolution: (key) => {
        return {type: types.SELECT_SAVED_SOLUTION, key}
    },
    resumeSavedPuzzle: () => {
        return {type: types.RESUME_SAVED_PUZZLE}
    },
    resumeSavedSolution: () => {
        return {type: types.RESUME_SAVED_SOLUTION}
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
    deleteSavedSolution: () => {
        return {type: types.DELETE_SAVED_SOLUTION_REQUEST}
    },
    deleteCreatedPuzzle: () => {
        return {type: types.DELETE_CREATED_PUZZLE_REQUEST}
    },
    confirmDelete: () => {
        return {type: types.CONFIRM_DELETE}
    },
    viewLeaderboard: () => {
        return {type: types.VIEW_LEADERBOARD}
    },
    followUnfollow: (id) => {
        return {type: types.FOLLOW_OR_UNFOLLOW, id}
    },
}