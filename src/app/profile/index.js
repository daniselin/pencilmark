export const types = {
    INITIALIZE_PROFILE: "profile/INITIALIZE_PROFILE",
    INITIALIZE_PROFILE_SUCCESS: "profile/INITIALIZE_PROFILE_SUCCESS",
    SELECT_SAVED_PUZZLE: "profile/SELECT_SAVED_PUZZLE",
    SELECT_CREATED_PUZZLE: "profile/SELECT_CREATED_PUZZLE",
    SELECT_COMPLETED_PUZZLE: "profile/SELECT_COMPLETED_PUZZLE",
    SOLVE_PUZZLE: "profile/SOLVE_PUZZLE",
}

export const initialState = {
    createdPuzzles: [],
    savedPuzzles: [],
    completedPuzzles: [],
    selectedPuzzle: {},
    profile: 0
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
    selectCreatedPuzzle: (key) => {
        return {type: types.SELECT_CREATED_PUZZLE, key}
    },
    selectCompletedPuzzle: (key) => {
        return {type: types.SELECT_COMPLETED_PUZZLE, key}
    },
    solvePuzzle: (key) => {
        return {type: types.SOLVE_PUZZLE, key}
    }
}