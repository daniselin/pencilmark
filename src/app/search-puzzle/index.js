export const types = {
    INITIALIZE_SEARCH: "searchPuzzle/INITIALIZE_SEARCH",
    FINISH_INITIALIZE_SEARCH: "searchPuzzle/FINISH_INITIALIZE_SEARCH",
    SUBMIT_SEARCH: "searchPuzzle/SUBMIT_SEARCH",
    SUBMIT_SEARCH_REQUEST: "searchPuzzle/SUBMIT_SEARCH_REQUEST",
    SUBMIT_SEARCH_FAILURE: "searchPuzzle/SUBMIT_SEARCH_FAILURE",
    SUBMIT_SEARCH_SUCCESS: "searchPuzzle/SUBMIT_SEARCH_SUCCESS",
    SOLVE_PUZZLE: "searchPuzzle/SELECT_PUZZLE",
    RESET_PUZZLE_SEARCH: "searchPuzzle/RESET_PUZZLE_SEARCH",
    REMOVE_ERROR_MESSAGE: "searchPuzzle/REMOVE_ERROR_MESSAGE",
    SELECT_CREATED_PUZZLE: "searchPuzzle/SELECT_CREATED_PUZZLE"
}

export const initialState = {
    isLoggingIn: false,
    puzzleSearchResults: [],
    isSearchLoading: false,
    searchErrorMessage: "",
    isLoading: false,
    selectedPuzzle: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FINISH_INITIALIZE_SEARCH:
            return {
                ...state,
                isLoading: false
            }
        case types.SUBMIT_SEARCH_REQUEST:
            return {
                ...state,
                isSearchLoading: true
            };
        case types.SUBMIT_SEARCH_FAILURE:
            return {
                ...state,
                isSearchLoading: false,
                searchErrorMessage: action.message
            };
        case types.SUBMIT_SEARCH_SUCCESS:
            return {
                ...state,
                isSearchLoading: false,
                puzzleSearchResults: action.results
            };
        case types.RESET_PUZZLE_SEARCH:
            return {
                ...state,
                isSearchLoading: false,
                puzzleSearchResults: []
            };
        case types.REMOVE_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: "",
                loginError: false
            };
        case types.SELECT_CREATED_PUZZLE:
            return {
                ...state,
                selectedPuzzle: state.puzzleSearchResults[action.index]
            }
        default:
            return state;
    }
};

export const actions = {
    initializeSearch: (query) => {
        return {type: types.INITIALIZE_SEARCH, query};
    },
    submitSearch: (query) => {
        return {type: types.SUBMIT_SEARCH, query};
    },
    solvePuzzle: (id) => {
        return {type: types.SOLVE_PUZZLE, id};
    },
    removeErrorMessage: (index) => {
        return {type: types.REMOVE_ERROR_MESSAGE, index};
    },
    selectCreatedPuzzle: (index) => {
        return {type: types.SELECT_CREATED_PUZZLE, index};
    }
}