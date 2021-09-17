import some from "lodash/some";
import forEach from "lodash/forEach";
import "../utils/utils";

export const types = {
    INITIALIZE_BUILD_PUZZLE: "build-puzzle/INITIALIZE_BUILD_PUZZLE",
    CELL_CLICK: "build-puzzle/CELL_CLICK",
    CONTROL_CELL_CLICK: "build-puzzle/CONTROL_CELL_CLICK",
    CELL_DRAG: "build-puzzle/CELL_DRAG",
    CONTROL_CELL_DRAG: "build-puzzle/CONTROL_CELL_DRAG",
    INITIALIZE_CONTROL_CELL_DRAG: "build-puzzle/INITIALIZE_CONTROL_CELL_DRAG",
    INITIALIZE_CELL_DRAG: "build-puzzle/INITIALIZE_CELL_DRAG",
    CELL_VALUE_CHANGE: "build-puzzle/CELL_VALUE_CHANGE",
    CELL_VALUE_CHANGE_INITIALIZE: "build-puzzle/CELL_VALUE_CHANGE_INITIALIZE",
    CELL_VALUE_DELETE: "build-puzzle/CELL_VALUE_DELETE",
    FOCUS_OFF_CELLS: "build-puzzle/FOCUS_OFF_CELLS",
    UPDATE_CONFLICT_CELLS: "build-puzzle/UPDATE_CONFLICT_CELLS",
    CREATE_PUZZLE_REQUEST: "build-puzzle/CREATE_PUZZLE_REQUEST",
    SAVE_PUZZLE_REQUEST: "build-puzzle/SAVE_PUZZLE_REQUEST",
    CREATE_PUZZLE_FAILURE: "build-puzzle/CREATE_PUZZLE_FAILURE",
    REMOVE_ERROR_MESSAGE: "build-puzzle/REMOVE_ERROR_MESSAGE",
};

export const initialState = {
    cells: '_________________________________________________________________________________',
    selectedCell: {
        box: 10,
        cell: 10,
        row: 10,
        col: 10
    },
    selectedCells: [],
    addingCells: true,
    conflictCells: [],
    errorMessage: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CELL_CLICK: {
            const {box, cell, row, col} = action;
            return {
                ...state,
                selectedCell: {
                    box: box,
                    cell: cell,
                    row: row,
                    col: col
                },
                selectedCells: []
            };
        }
        case types.CONTROL_CELL_CLICK: {
            const clickedCell = {
                box: action.box,
                cell: action.cell,
                row: action.row,
                col: action.col
            };
            if (state.selectedCell.box === 10) {
                if (!some(state.selectedCells, clickedCell)) {
                    return {
                        ...state,
                        selectedCells: [...state.selectedCells, clickedCell],
                        selectedCell: initialState.selectedCell
                    }
                } else {
                    const newSelectedCells = state.selectedCells.filter((aCell) => {
                        return (aCell.row !== clickedCell.row || aCell.col !== clickedCell.col)
                    });
                    console.log(newSelectedCells);
                    return {
                        ...state,
                        selectedCells: newSelectedCells,
                        selectedCell: initialState.selectedCell
                    }
                }
                ;
            }
            else {
                return {
                    ...state,
                    selectedCells: [{
                        cell: clickedCell.cell,
                        box: clickedCell.box,
                        row: clickedCell.row,
                        col: clickedCell.col
                    }, {
                        cell: state.selectedCell.cell,
                        box: state.selectedCell.box,
                        row: state.selectedCell.row,
                        col: state.selectedCell.col,
                    }],
                    selectedCell: initialState.selectedCell
                }
            }
        }
        case types.CELL_DRAG:
            const drugCell = {
                box: action.box,
                cell: action.cell,
                row: action.row,
                col: action.col
            };
            if (!some(state.selectedCells, drugCell)) {
                return {
                    ...state,
                    selectedCells: [...state.selectedCells, drugCell]
                }
            } else {
                return {...state}
            };
        case types.CONTROL_CELL_DRAG: {
            const drugCell = {
                box: action.box,
                cell: action.cell,
                row: action.row,
                col: action.col
            };
            if (some(state.selectedCells, drugCell) && !state.addingCells) {
                const newSelectedCells = state.selectedCells.filter((aCell) => {
                    return (aCell.row !== drugCell.row || aCell.col !== drugCell.col)
                });
                console.log(newSelectedCells);
                return {
                    ...state,
                    selectedCells: newSelectedCells,
                }
            } else if (!some(state.selectedCells, drugCell) && state.addingCells) {
                return {
                    ...state,
                    selectedCells: [...state.selectedCells, drugCell]
                }
            }
            return {...state};
            ;
        }
        case types.INITIALIZE_CELL_DRAG:
            return {
                ...state,
                selectedCell: {
                    box: 10,
                    cell: 10,
                    row: 10,
                    col: 10
                },
                selectedCells: []
            }
        case types.INITIALIZE_CONTROL_CELL_DRAG: {
            const drugCell = {
                box: action.box,
                cell: action.cell,
                row: action.row,
                col: action.col
            }
            if (drugCell.row === state.selectedCell.row && drugCell.col === state.selectedCell.row) {
                return {
                    ...state,
                    selectedCell: {
                        box: 10,
                        cell: 10,
                        row: 10,
                        col: 10
                    }
                }
            }
            if (!some(state.selectedCells, drugCell)) {
                return {
                    ...state,
                    addingCells: true
                }
            } else {
                return {
                    ...state,
                    addingCells: false
                }
            }
        }
        case types.CELL_VALUE_CHANGE: {
            const selectedCell = {...state.selectedCell};
            const selectedCells = [...state.selectedCells];
            const cells = {...state.cells};
            const newValue = action.newValue;
            if (selectedCell.row !== 10) {
                const selectedCellIndex = (selectedCell.col - 1) * 9 + (selectedCell.row - 1);
                cells[selectedCellIndex] = newValue;
            } else {
                forEach(selectedCells, (cell) => {
                    const selectedCellIndex = (cell.col - 1) * 9 + (cell.row - 1);
                    cells[selectedCellIndex] = newValue;
                });
            }
            ;

            return {
                ...state,
                cells: Object.values(cells).join('')
            }
        }
        case types.CELL_VALUE_DELETE: {
            const selectedCell = {...state.selectedCell};
            const selectedCells = [...state.selectedCells];
            const cells = {...state.cells};

            if (selectedCell.row !== 10) {
                const selectedCellIndex = (selectedCell.col - 1) * 9 + (selectedCell.row - 1);
                cells[selectedCellIndex] = "_";
            } else {
                forEach(selectedCells, (cell) => {
                    const selectedCellIndex = (cell.col - 1) * 9 + (cell.row - 1);
                    cells[selectedCellIndex] = "_";
                });
            }
            ;

            return {
                ...state,
                cells: Object.values(cells).join('')
            }
        }
        case types.FOCUS_OFF_CELLS:
            return {
                ...state,
                selectedCell: initialState.selectedCell,
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
    }
}

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    return this.substring(0, index) + replacement + this.substring(index + 1);
}


