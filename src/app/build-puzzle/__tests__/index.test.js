import buildPuzzle, {types as buildPuzzleActions, actions, types} from "../index";

describe('build puzzle reducer', () => {
    it('should return the initial state', () => {
        expect(buildPuzzle(undefined, {})).toEqual({
            cells: '_________________________________________________________________________________',
            selectedCells: [],
            addingCells: true,
            conflictCells: [],
            errorMessage: "",
            loadedPuzzle: 0,
            shouldLoadPuzzle: false
        });
    });

    it('should set loaded puzzle', () => {
        const setLoadedPuzzleAction = {
            type: buildPuzzleActions.SET_LOADED_PUZZLE
        };
        expect(buildPuzzle({loadedPuzzle: {given_digits: "123"}}, setLoadedPuzzleAction)).toEqual({
            cells: "123",
            selectedCells: [],
            conflictCells: [],
            loadedPuzzle: {given_digits: "123"}
        })
    })

    it('should click cell', () => {
        const action = {
            type: buildPuzzleActions.CELL_CLICK,
            box: 1,
            cell: 2,
            row: 3,
            col: 4
        };
        expect(buildPuzzle({}, action)).toEqual({
            selectedCells: [{box: 1, cell: 2, row: 3, col: 4}]
        })
    })

    it('should remove selected cell', () => {
        const action = {
            type: buildPuzzleActions.REMOVE_SELECTED_CELL,
            selectedCell: {
                box: 1,
                cell: 2,
                row: 3,
                col: 4
            }
        };
        expect(buildPuzzle({selectedCells: [{row: 1, col: 2}, {row: 3, col: 4}]}, action)).toEqual({
            selectedCells: [{row: 1, col: 2}]
        })
    })

    it('should initialize cell drag', () => {
        const action = {
            type: buildPuzzleActions.INITIALIZE_CELL_DRAG
        };
        expect(buildPuzzle({}, action)).toEqual({
            selectedCells: []
        })
    })

    it('should set adding cells to false', () => {
        const action = {
            type: buildPuzzleActions.ADDING_CELLS_FALSE
        };
        expect(buildPuzzle({}, action)).toEqual({
            addingCells: false
        })
    })

    it('should change cell values', () => {
        const action = {
            type: buildPuzzleActions.CELL_VALUE_CHANGE_VALUES,
            newValue: 1
        };
        expect(buildPuzzle({selectedCells: [{row: 1, col: 2}], cells: "123456789789"}, action)).toEqual({
            cells: "123456789189",
            selectedCells: [{row: 1, col: 2}]
        })
    })

    it('should delete cell values', () => {
        const action = {
            type: buildPuzzleActions.CELL_VALUE_DELETE
        };
        expect(buildPuzzle({selectedCells: [{row: 1, col: 2}], cells: "123456789789"}, action)).toEqual({
            cells: "123456789_89",
            selectedCells: [{row: 1, col: 2}]
        })
    })

    it('should focus off cells', () => {
        const action = {
            type: buildPuzzleActions.FOCUS_OFF_CELLS
        };
        expect(buildPuzzle({}, action)).toEqual({
            selectedCells: []
        })
    })

    it('should update conflict cells', () => {
        const action = {
            type: buildPuzzleActions.UPDATE_CONFLICT_CELLS,
            conflictCells: [{row: 1, col: 1}]
        };
        expect(buildPuzzle({}, action)).toEqual({
            conflictCells: [{row: 1, col: 1}]
        })
    })

    it('should remove error message', () => {
        const action = {
            type: buildPuzzleActions.REMOVE_ERROR_MESSAGE
        };
        expect(buildPuzzle({errorMessage: "error"}, action)).toEqual({
            errorMessage: ""
        })
    })

    it('should load saved puzzle', () => {
        const action = {
            type: buildPuzzleActions.LOAD_SAVED_PUZZLE,
            selectedPuzzle: {name: "newPuzzle"}
        };
        expect(buildPuzzle({}, action)).toEqual({
            loadedPuzzle: {name: "newPuzzle"}
        })
    })

    it('should reset loaded puzzle', () => {
        const action = {
            type: buildPuzzleActions.RESET_LOADED_PUZZLE,
        };
        expect(buildPuzzle({loadedPuzzle: {name: "newPuzzle"}}, action)).toEqual({
            loadedPuzzle: {}
        })
    })

    it('should set should load puzzle', () => {
        const action = {
            type: buildPuzzleActions.SHOULD_LOAD_PUZZLE,
        };
        expect(buildPuzzle({shouldLoadPuzzle: false}, action)).toEqual({
            shouldLoadPuzzle: true
        })
    })

    describe('build puzzle reducer actions', () => {
        it('should send off actions', () => {
            expect(actions.clickCell(1, 2, 3, 4)).toEqual({
                type: types.CELL_CLICK, box: 1, cell: 2, row: 3, col: 4
            })

            expect(actions.controlClickCell(1, 2, 3, 4)).toEqual({
                type: types.CONTROL_CELL_CLICK, box: 1, cell: 2, row: 3, col: 4
            })

            expect(actions.changeCellValue(1)).toEqual({
                type: types.CELL_VALUE_CHANGE, newValue: 1
            })

            expect(actions.deleteCellValue()).toEqual({
                type: types.CELL_VALUE_DELETE,
            })

            expect(actions.dragCell(1, 2, 3, 4)).toEqual({
                type: types.CELL_DRAG, box: 1, cell: 2, row: 3, col: 4
            })

            expect(actions.controlDragCell(1, 2, 3, 4)).toEqual({
                type: types.CONTROL_CELL_DRAG, box: 1, cell: 2, row: 3, col: 4
            })

            expect(actions.initializeCellDrag()).toEqual({
                type: types.INITIALIZE_CELL_DRAG,
            })

            expect(actions.initializeControlCellDrag(1, 2, 3, 4)).toEqual({
                type: types.INITIALIZE_CONTROL_CELL_DRAG, box: 1, cell: 2, row: 3, col: 4
            })

            expect(actions.focusOffCells()).toEqual({
                type: types.FOCUS_OFF_CELLS
            })

            expect(actions.createPuzzle()).toEqual({
                type: types.CREATE_PUZZLE_REQUEST
            })

            expect(actions.removeErrorMessage()).toEqual({
                type: types.REMOVE_ERROR_MESSAGE
            })

            expect(actions.initializeBuildPuzzle()).toEqual({
                type: types.INITIALIZE_BUILD_PUZZLE
            })

            expect(actions.savePuzzle()).toEqual({
                type: types.SAVE_PUZZLE_REQUEST
            })

            expect(actions.onTextFieldFocus()).toEqual({
                type: types.FOCUS_OFF_CELLS
            })

            expect(actions.startNewPuzzle()).toEqual({
                type: types.START_NEW_PUZZLE
            })

            expect(actions.rebuildPuzzle()).toEqual({
                type: types.REBUILD_PUZZLE
            })
        })
    })
});
