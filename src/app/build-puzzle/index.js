import some from "lodash/some";
import forEach from "lodash/forEach";
import "../utils";

export const types = {
    INITIALIZE_BUILD_PUZZLE: "build-puzzle/INITIALIZE_BUILD_PUZZLE",
    INITIALIZE_BUILD_PUZZLE_SUCCESS: "build-puzzle/INITIALIZE_BUILD_PUZZLE_SUCCESS",
    SET_IS_LOADING: "build-puzzle/SET_IS_LOADING",
    SET_LOADED_PUZZLE: "build-puzzle/SET_LOADED_PUZZLE",
    LOAD_SAVED_PUZZLE: "build-puzzle/LOAD_SAVED_PUZZLE",
    RESET_LOADED_PUZZLE: "build-puzzle/RESET_LOADED_PUZZLE",
    CELL_CLICK: "build-puzzle/CELL_CLICK",
    CONTROL_CELL_CLICK: "build-puzzle/CONTROL_CELL_CLICK",
    CELL_DRAG: "build-puzzle/CELL_DRAG",
    CONTROL_CELL_DRAG: "build-puzzle/CONTROL_CELL_DRAG",
    INITIALIZE_CONTROL_CELL_DRAG: "build-puzzle/INITIALIZE_CONTROL_CELL_DRAG",
    INITIALIZE_CELL_DRAG: "build-puzzle/INITIALIZE_CELL_DRAG",

    CELL_VALUE_CHANGE: "build-puzzle/CELL_VALUE_CHANGE",
    CELL_VALUE_CHANGE_SINGLE_CELL: "build-puzzle/CELL_VALUE_CHANGE_SINGLE_CELL",
    CELL_VALUE_CHANGE_VALUES: "build-puzzle/CELL_VALUE_CHANGE_VALUES",
    ADD_SELECTED_CELL: "build-puzzle/ADD_SELECTED_CELL",
    REMOVE_SELECTED_CELL: "build-puzzle/REMOVE_SELECTED_CELL",
    ADDING_CELLS_TRUE: "build-puzzle/ADDING_CELLS_TRUE",
    ADDING_CELLS_FALSE: "build-puzzle/ADDING_CELLS_FALSE",

    CELL_VALUE_CHANGE_INITIALIZE: "build-puzzle/CELL_VALUE_CHANGE_INITIALIZE",
    CELL_VALUE_DELETE: "build-puzzle/CELL_VALUE_DELETE",
    FOCUS_OFF_CELLS: "build-puzzle/FOCUS_OFF_CELLS",
    UPDATE_CONFLICT_CELLS: "build-puzzle/UPDATE_CONFLICT_CELLS",
    CREATE_PUZZLE_REQUEST: "build-puzzle/CREATE_PUZZLE_REQUEST",
    SAVE_PUZZLE_REQUEST: "build-puzzle/SAVE_PUZZLE_REQUEST",
    CREATE_PUZZLE_FAILURE: "build-puzzle/CREATE_PUZZLE_FAILURE",
    REMOVE_ERROR_MESSAGE: "build-puzzle/REMOVE_ERROR_MESSAGE",
    START_NEW_PUZZLE: "build-puzzle/START_NEW_PUZZLE",
    SHOULD_LOAD_PUZZLE: "build-puzzle/SHOULD_LOAD_PUZZLE",
    SHOULD_NOT_LOAD_PUZZLE: "build-puzzle/SHOULD_NOT_LOAD_PUZZLE",
    REBUILD_PUZZLE: "build-puzzle/REBUILD_PUZZLE",
    RESET_FOCUS: "build-puzzle/RESET_FOCUS",
};

export const initialState = {
    cells: '_________________________________________________________________________________',
    selectedCells: [],
    addingCells: true,
    conflictCells: [],
    errorMessage: "",
    loadedPuzzle: 0,
    shouldLoadPuzzle: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.INITIALIZE_BUILD_PUZZLE:
            return {
                ...state,
                isLoading: true
            }
        case types.INITIALIZE_BUILD_PUZZLE_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case types.SET_IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case types.SET_LOADED_PUZZLE:
            return {
                ...state,
                cells: state.loadedPuzzle.given_digits,
                selectedCells: [],
                conflictCells: []
            }
        case types.RESET_FOCUS:
            return {...state,
                selectedCells: [],
                conflictCells: []}
        case types.CELL_CLICK: {
            const {box, cell, row, col} = action;
            return {
                ...state,
                selectedCells: [{box: box, cell: cell, row: row, col: col}]
            };
        }
        case types.ADD_SELECTED_CELL: {
            const clickedCell = {
                box: action.selectedCell.box,
                cell: action.selectedCell.cell,
                row: action.selectedCell.row,
                col: action.selectedCell.col
            };
            return {
                ...state,
                selectedCells: [...state.selectedCells, clickedCell],
            }
        }
        case types.REMOVE_SELECTED_CELL: {
            const clickedCell = {
                box: action.selectedCell.box,
                cell: action.selectedCell.cell,
                row: action.selectedCell.row,
                col: action.selectedCell.col
            };
            const newSelectedCells = state.selectedCells.filter((aCell) => {
                return (aCell.row !== clickedCell.row || aCell.col !== clickedCell.col)
            });
            return {
                ...state,
                selectedCells: newSelectedCells,
            }
        }
        case types.INITIALIZE_CELL_DRAG:
            return {
                ...state,
                selectedCells: []
            }
        case types.ADDING_CELLS_TRUE: {
            return {
                ...state,
                addingCells: true
            }
        }
        case types.ADDING_CELLS_FALSE: {
            return {
                ...state,
                addingCells: false
            }
        }
        case types.CELL_VALUE_CHANGE_VALUES: {
            const selectedCells = [...state.selectedCells];
            const cells = {...state.cells};
            const newValue = action.newValue;
            forEach(selectedCells, (cell) => {
                const selectedCellIndex = (cell.col - 1) * 9 + (cell.row - 1);
                cells[selectedCellIndex] = newValue;
            });

            return {
                ...state,
                cells: Object.values(cells).join('')
            }
        }
        case types.CELL_VALUE_DELETE: {
            const selectedCells = [...state.selectedCells];
            const cells = {...state.cells};

            forEach(selectedCells, (cell) => {
                const selectedCellIndex = (cell.col - 1) * 9 + (cell.row - 1);
                cells[selectedCellIndex] = "_";
            });

            return {
                ...state,
                cells: Object.values(cells).join('')
            }
        }
        case types.FOCUS_OFF_CELLS:
            return {
                ...state,
                selectedCells: []
            }
        case types.CELL_VALUE_CHANGE_INITIALIZE:
            return {...state,
            conflictCells: []
            }
        case types.UPDATE_CONFLICT_CELLS:
            return {...state,
            conflictCells: action.conflictCells
            }
        case types.CREATE_PUZZLE_FAILURE:
            return {...state,
            errorMessage: action.error.message
            }
        case types.REMOVE_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: ""
            }
        case types.LOAD_SAVED_PUZZLE:
            return {
                ...state,
                loadedPuzzle: action.selectedPuzzle
            }
        case types.RESET_LOADED_PUZZLE:
            return {
                ...state,
                loadedPuzzle: {}
            }
        case types.START_NEW_PUZZLE:
            return {
                ...initialState
            }
        case types.SHOULD_LOAD_PUZZLE:
            return {
                ...state,
                shouldLoadPuzzle: true
            }
        case types.SHOULD_NOT_LOAD_PUZZLE:
            return {
                ...state,
                shouldLoadPuzzle: false
            }
        default:
            return state;
    }
};

export const actions = {
    clickCell: (box, cell, row, col) => {
        return {type: types.CELL_CLICK, box, cell, row, col};
    },
    controlClickCell: (box, cell, row, col) => {
        return {type: types.CONTROL_CELL_CLICK, box, cell, row, col};
    },
    changeCellValue: (newValue) => {
        return {type: types.CELL_VALUE_CHANGE, newValue}
    },
    deleteCellValue: () => {
        return {type: types.CELL_VALUE_DELETE}
    },
    dragCell: (box, cell, row, col) => {
        return {type: types.CELL_DRAG, box, cell, row, col};
    },
    controlDragCell: (box, cell, row, col) => {
        return {type: types.CONTROL_CELL_DRAG, box, cell, row, col};
    },
    initializeCellDrag: () => {
        return {type: types.INITIALIZE_CELL_DRAG}
    },
    initializeControlCellDrag: (box, cell, row, col) => {
        return {type: types.INITIALIZE_CONTROL_CELL_DRAG, box, cell, row, col}
    },
    focusOffCells: () => {
        return {type: types.FOCUS_OFF_CELLS}
    },
    createPuzzle: () => {
        return {type: types.CREATE_PUZZLE_REQUEST}
    },
    removeErrorMessage: () => {
        return {type: types.REMOVE_ERROR_MESSAGE}
    },
    initializeBuildPuzzle: () => {
        return {type: types.INITIALIZE_BUILD_PUZZLE}
    },
    savePuzzle: () => {
        return {type: types.SAVE_PUZZLE_REQUEST}
    },
    onTextFieldFocus: () => {
        return {type: types.FOCUS_OFF_CELLS}
    },
    startNewPuzzle: () => {
        return {type: types.START_NEW_PUZZLE}
    },
    rebuildPuzzle: () => {
        return {type: types.REBUILD_PUZZLE}
    }
}


