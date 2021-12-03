import search, {types as searchTypes, actions} from "../index";

describe('profile reducer', () => {
    it('should return the initial state', () => {
        expect(search(undefined, {})).toEqual({
            isLoggingIn: false,
            puzzleSearchResults: [],
            isSearchLoading: false,
            searchErrorMessage: "",
            isLoading: false,
            selectedPuzzle: {}
        });
    });

    it('should finish initialize search', () => {
        const action = {
            type: searchTypes.FINISH_INITIALIZE_SEARCH
        };
        expect(search({}, action)).toEqual({
            isLoading: false
        })
    })

    it('should submit search request', () => {
        const action = {
            type: searchTypes.SUBMIT_SEARCH_REQUEST
        };
        expect(search({}, action)).toEqual({
            isSearchLoading: true
        })
    })

    it('should fail submit search', () => {
        const action = {
            type: searchTypes.SUBMIT_SEARCH_FAILURE,
            message: 'errorMessage'
        };
        expect(search({}, action)).toEqual({
            isSearchLoading: false,
            searchErrorMessage: 'errorMessage'
        })
    })

    it('should succeed submit search', () => {
        const action = {
            type: searchTypes.SUBMIT_SEARCH_SUCCESS,
            results: [{result1: 'resultText'}]
        };
        expect(search({}, action)).toEqual({
            isSearchLoading: false,
            puzzleSearchResults: [{result1: 'resultText'}]
        })
    })

    it('should reset search results', () => {
        const action = {
            type: searchTypes.RESET_PUZZLE_SEARCH
        };
        expect(search({}, action)).toEqual({
            isSearchLoading: false,
            puzzleSearchResults: []
        })
    })

    it('should remove error message', () => {
        const action = {
            type: searchTypes.REMOVE_ERROR_MESSAGE
        };
        expect(search({errorMessage: 'errorMEssage'}, action)).toEqual({
            errorMessage: "",
            loginError: false
        })
    })

    it('should select created puzzle', () => {
        const action = {
            type: searchTypes.SELECT_CREATED_PUZZLE,
            index: 3
        };
        expect(search({puzzleSearchResults: [{1: 1}, {2: 2}, {3: 4}, {5: 6}]}, action)).toEqual({
            selectedPuzzle: {5: 6},
            puzzleSearchResults: [{1: 1}, {2: 2}, {3: 4}, {5: 6}]
        })
    })

    describe('search puzzle reducer actions', () => {
        it('should send off actions', () => {
            expect(actions.initializeSearch('query')).toEqual({
                type: searchTypes.INITIALIZE_SEARCH, query: 'query'
            })
            expect(actions.submitSearch('query')).toEqual({
                type: searchTypes.SUBMIT_SEARCH, query: 'query'
            })
            expect(actions.solvePuzzle('query')).toEqual({
                type: searchTypes.SOLVE_PUZZLE, id: 'query'
            })
            expect(actions.removeErrorMessage('query')).toEqual({
                type: searchTypes.REMOVE_ERROR_MESSAGE, index: 'query'
            })
            expect(actions.selectCreatedPuzzle('query')).toEqual({
                type: searchTypes.SELECT_CREATED_PUZZLE, index: 'query'
            })
        })
    })
})