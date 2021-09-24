import some from "lodash/some";
import forEach from "lodash/forEach";
import "../utils";
import {index} from "../utils";

export const types = {
    INITIALIZE_SOLVE_PUZZLE: "solve-puzzle/INITIALIZE_SOLVE_PUZZLE",
    INITIALIZE_SOLVE_PUZZLE_SUCCESS: "solve-puzzle/INITIALIZE_SOLVE_PUZZLE_SUCCESS",
    CELL_CLICK: "solve-puzzle/CELL_CLICK",
    CONTROL_CELL_CLICK: "solve-puzzle/CONTROL_CELL_CLICK",
    CELL_DRAG: "solve-puzzle/CELL_DRAG",
    CONTROL_CELL_DRAG: "solve-puzzle/CONTROL_CELL_DRAG",
    INITIALIZE_CONTROL_CELL_DRAG: "solve-puzzle/INITIALIZE_CONTROL_CELL_DRAG",
    INITIALIZE_CELL_DRAG: "solve-puzzle/INITIALIZE_CELL_DRAG",
    CELL_VALUE_CHANGE: "solve-puzzle/CELL_VALUE_CHANGE",
    CELL_VALUE_CHANGE_INITIALIZE: "solve-puzzle/CELL_VALUE_CHANGE_INITIALIZE",
    CELL_VALUE_DELETE: "solve-puzzle/CELL_VALUE_DELETE",
    FOCUS_OFF_CELLS: "solve-puzzle/FOCUS_OFF_CELLS",
    UPDATE_CONFLICT_CELLS: "solve-puzzle/UPDATE_CONFLICT_CELLS",
    VIEW_PUZZLE: "solve-puzzle/VIEW_PUZZLE",
    SET_RATING: "solve-puzzle/SET_RATING",
    SUBMIT_RATING_REQUEST: "solve-puzzle/SUBMIT_RATING_REQUEST",

};

export const initialState = {
    currentDigits: '_________________________________________________________________________________',
    selectedCell: {
        box: 10,
        cell: 10,
        row: 10,
        col: 10
    },
    cornerDigits: {},
    centerDigits: {},
    cellColors: '_________________________________________________________________________________',
    selectedCells: [],
    addingCells: true,
    conflictCells: [],
    errorMessage: "",
    loadedPuzzle: {
        given_digits: '_________________________________________________________________________________'
    },
    rating: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.INITIALIZE_SOLVE_PUZZLE_SUCCESS:
            return {
                ...state,
                currentDigits: action.puzzle.puzzle.given_digits,
                selectedCell: {
                    box: 10,
                    cell: 10,
                    row: 10,
                    col: 10
                },
                selectedCells: [],
                conflictCells: [],
                loadedPuzzle: action.puzzle.puzzle
            }
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
                    return {
                        ...state,
                        selectedCells: newSelectedCells,
                        selectedCell: initialState.selectedCell
                    }
                }
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
            }
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
            const cells = {...state.currentDigits};
            const loadedPuzzle = {...state.loadedPuzzle}
            const newValue = action.newValue;
            if (selectedCell.row !== 10) {
                const selectedCellIndex = (selectedCell.col - 1) * 9 + (selectedCell.row - 1);
                cells[selectedCellIndex] = newValue;
            } else {
                forEach(selectedCells, (cell) => {
                    if (loadedPuzzle.given_digits.charAt(index(cell.col, cell.row)) !== cells[index(cell.col, cell.row)] ||
                        cells[index(cell.col, cell.row)] === "_") {

                        const selectedCellIndex = (cell.col - 1) * 9 + (cell.row - 1);
                        cells[selectedCellIndex] = newValue;
                    }
                });
            }

            return {
                ...state,
                currentDigits: Object.values(cells).join('')
            }
        }
        case types.CELL_VALUE_DELETE: {
            const selectedCell = {...state.selectedCell};
            const selectedCells = [...state.selectedCells];
            const cells = {...state.currentDigits};
            const loadedPuzzle = {...state.loadedPuzzle};

            if (selectedCell.row !== 10) {
                const selectedCellIndex = (selectedCell.col - 1) * 9 + (selectedCell.row - 1);
                cells[selectedCellIndex] = "_";
            } else {
                forEach(selectedCells, (cell) => {
                    if (loadedPuzzle.given_digits.charAt(index(cell.col, cell.row)) !== cells[index(cell.col, cell.row)] ||
                        cells[index(cell.col, cell.row)] === "_") {
                        const selectedCellIndex = (cell.col - 1) * 9 + (cell.row - 1);
                        cells[selectedCellIndex] = "_";
                    }
                });
            }

            return {
                ...state,
                currentDigits: Object.values(cells).join('')
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
        case types.SET_RATING:
            return {...state,
                rating: action.newRating
            }
        default:
            return state
    }
};

export const actions = {
    initializeSolvePuzzle: (id) => {
        return {type: types.INITIALIZE_SOLVE_PUZZLE, id}
    },
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
    viewPuzzle: () => {
        return {type: types.VIEW_PUZZLE}
    },
    setRating: (newRating) => {
        return {type: types.SET_RATING, newRating}
    },
    submitRating: () => {
        return {type: types.SUBMIT_RATING_REQUEST}
    }
}

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    return this.substring(0, index) + replacement + this.substring(index + 1);
}


