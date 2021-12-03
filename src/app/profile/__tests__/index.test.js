import profile, {types as profileTypes, actions} from "../index";

describe('profile reducer', () => {
    it('should return the initial state', () => {
        expect(profile(undefined, {})).toEqual({
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
        });
    });

    it('should intialize profile', () => {
        const action = {
            type: profileTypes.INITIALIZE_PROFILE_SUCCESS,
            response: {
                createdPuzzles: 1,
                savedPuzzles: 2,
                savedSolutions: 3,
                completedPuzzles: 4,
                profile: 5,
                isFollowing: true,
                isLoading: false
            }
        };
        expect(profile({}, action)).toEqual({
            createdPuzzles: 1,
            savedPuzzles: 2,
            savedSolutions: 3,
            completedPuzzles: 4,
            profile: 5,
            isFollowing: true,
            isLoading: false
        })
    })

    it('should delete saved puzzle', () => {
        const action = {
            type: profileTypes.DELETE_SAVED_PUZZLE_SUCCESS,
        };
        expect(profile({savedPuzzles: [{name: 'name1'}, {name: 'name2'}], selectedPuzzle: {name: 'name1'}}, action)).toEqual({
            savedPuzzles: [{name: 'name2'}],
            selectedPuzzle: {name: 'name1'}
        })
    })

    it('should delete saved solution', () => {
        const action = {
            type: profileTypes.DELETE_SAVED_SOLUTION_SUCCESS,
            id: 2
        };
        expect(profile({savedSolutions: [{id: 1}, {id: 2}], selectedPuzzle: {name: 'name1'}}, action)).toEqual({
            savedSolutions: [{id: 1}],
            selectedPuzzle: {name: 'name1'}
        })
    })

    it('should follow', () => {
        const action = {
            type: profileTypes.FOLLOW_SUCCESS
        };
        expect(profile({}, action)).toEqual({
            isFollowing: true,
            isFollowActionLoading: false
        })
    })

    it('should unfollow', () => {
        const action = {
            type: profileTypes.UNFOLLOW_SUCCESS
        };
        expect(profile({}, action)).toEqual({
            isFollowing: false,
            isFollowActionLoading: false
        })
    })

    it('should view leaderboard', () => {
        const action = {
            type: profileTypes.VIEW_LEADERBOARD_SUCCESS,
            leaderboard: 'leaderboard'
        };
        expect(profile({}, action)).toEqual({
            leaderboard: 'leaderboard'
        })
    })

    describe('profile reducer actions', () => {
        it('should send off actions', () => {
            expect(actions.followUnfollow()).toEqual({
                type: profileTypes.FOLLOW_OR_UNFOLLOW
            })
            expect(actions.selectSavedPuzzle('key')).toEqual({
                type: profileTypes.SELECT_SAVED_PUZZLE, key: 'key'
            })
            expect(actions.selectSavedSolution('key')).toEqual({
                type: profileTypes.SELECT_SAVED_SOLUTION, key: 'key'
            })
            expect(actions.initializeProfile('profile')).toEqual({
                type: profileTypes.INITIALIZE_PROFILE, username: 'profile'
            })
            expect(actions.resumeSavedPuzzle()).toEqual({
                type: profileTypes.RESUME_SAVED_PUZZLE
            })
            expect(actions.resumeSavedSolution()).toEqual({
                type: profileTypes.RESUME_SAVED_SOLUTION
            })
            expect(actions.selectCreatedPuzzle('key')).toEqual({
                type: profileTypes.SELECT_CREATED_PUZZLE, key: 'key'
            })
            expect(actions.selectCompletedPuzzle('key')).toEqual({
                type: profileTypes.SELECT_COMPLETED_PUZZLE, key: 'key'
            })
            expect(actions.solvePuzzle('key')).toEqual({
                type: profileTypes.SOLVE_PUZZLE, key: 'key'
            })
            expect(actions.deleteSavedPuzzle()).toEqual({
                type: profileTypes.DELETE_SAVED_PUZZLE_REQUEST
            })
            expect(actions.deleteSavedSolution()).toEqual({
                type: profileTypes.DELETE_SAVED_SOLUTION_REQUEST
            })
            expect(actions.deleteCreatedPuzzle()).toEqual({
                type: profileTypes.DELETE_CREATED_PUZZLE_REQUEST
            })
            expect(actions.confirmDelete()).toEqual({
                type: profileTypes.CONFIRM_DELETE
            })
            expect(actions.viewLeaderboard()).toEqual({
                type: profileTypes.VIEW_LEADERBOARD
            })
        })
    })
});