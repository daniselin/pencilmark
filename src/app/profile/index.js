export const types = {
    INITIALIZE_PROFILE: "profile/INITIALIZE_PROFILE",
    INITIALIZE_PROFILE_SUCCESS: "profile/INITIALIZE_PROFILE_SUCCESS",
    SELECT_SAVED_PUZZLE: "profile/SELECT_SAVED_PUZZLE",
}

export const initialState = {
    createdPuzzles: [],
    savedPuzzles: [],
    profile: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.INITIALIZE_PROFILE_SUCCESS:
            return {
                ...state,
                createdPuzzles: action.response.createdPuzzles,
                savedPuzzles: action.response.savedPuzzles,
                profile: action.response.profile
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
    }
}