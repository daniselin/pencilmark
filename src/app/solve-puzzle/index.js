import some from "lodash/some";
import forEach from "lodash/forEach";
import "../utils";
import {
    hasPencilmark,
    index,
    isSelectionAllDigits,
    selectionHasColor,
    selectionHasDigit,
    selectionHasPencilmark
} from "../utils";

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
    COMPLETE_PUZZLE_REQUEST: "solve-puzzle/COMPLETE_PUZZLE_REQUEST",
    CHANGE_ENTER_MODE: "solve-puzzle/CHANGE_ENTER_MODE",
    ROTATE_ENTER_MODE: "solve-puzzle/ROTATE_ENTER_MODE",

    SAVE_PUZZLE_REQUEST: "solve-puzzle/SAVE_PUZZLE_REQUEST",
    SAVE_PUZZLE_SUCCESS: "solve-puzzle/SAVE_PUZZLE_SUCCESS",
    SAVE_PUZZLE_FAILURE: "solve-puzzle/SAVE_PUZZLE_FAILURE",

    LOAD_SAVED_SOLUTION: "solve-puzzle/LOAD_SAVED_SOLUTION",
};

export const initialState = {
    currentDigits: '_________________________________________________________________________________',
    selectedCell: {
        box: 10,
        cell: 10,
        row: 10,
        col: 10
    },
    cornerDigits: {
        1: {
            1: {1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false},
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        2: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        3: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        4: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        5: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        6: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        7: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        8: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        9: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        }
    },
    centerDigits: {
        1: {
            1: {1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false},
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        2: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        3: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        4: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        5: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        6: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        7: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        8: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        },
        9: {
            1: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            2: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            3: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            4: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            5: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            6: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            7: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            8: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            },
            9: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false
            }
        }
    },
    cellColors: '_________________________________________________________________________________',
    selectedCells: [],
    addingCells: true,
    conflictCells: [],
    errorMessage: "",
    loadedPuzzle: {
        given_digits: '_________________________________________________________________________________'
    },
    rating: 0,
    enterMode: "digit",
    isSaving: false,
    savedPuzzle: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.INITIALIZE_SOLVE_PUZZLE:
            return {
                ...state,
                isLoading: true
            }
        case types.INITIALIZE_SOLVE_PUZZLE_SUCCESS:
            if (state.savedPuzzle) {
                return {
                    ...state,
                    isLoading: false,
                    currentDigits: state.savedPuzzle.currentDigits,
                    selectedCell: {
                        box: 10,
                        cell: 10,
                        row: 10,
                        col: 10
                    },
                    selectedCells: [],
                    conflictCells: [],
                    cellColors: state.savedPuzzle.cellColors,
                    loadedPuzzle: action.puzzle.puzzle,
                    centerDigits: state.savedPuzzle.centerDigits,
                    cornerDigits: state.savedPuzzle.cornerDigits,
                    savedPuzzle: false
                }
            }
            else {
                return {
                    ...state,
                    isLoading: false,
                    currentDigits: action.puzzle.puzzle.given_digits,
                    selectedCell: {
                        box: 10,
                        cell: 10,
                        row: 10,
                        col: 10
                    },
                    selectedCells: [],
                    conflictCells: [],
                    cellColors: initialState.cellColors,
                    centerDigits: {
                        1: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        2: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        3: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        4: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        5: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        6: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        7: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        8: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        9: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        }
                    },
                    cornerDigits: {
                        1: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        2: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        3: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        4: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        5: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        6: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        7: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        8: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        },
                        9: {
                            1: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            2: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            3: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            4: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            5: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            6: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            7: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            8: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            },
                            9: {
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                                6: false,
                                7: false,
                                8: false,
                                9: false
                            }
                        }
                    },
                    loadedPuzzle: action.puzzle.puzzle
                }
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
            } else {
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
            const cellColors = {...state.cellColors};
            const loadedPuzzle = {...state.loadedPuzzle}
            const value = action.value;
            const mode = state.enterMode;
            const cornerDigits = {...state.cornerDigits};
            const centerDigits = {...state.centerDigits};

            switch (mode) {
                case "digit": {
                    if (selectedCell.row !== 10) {
                        const selectedCellIndex = (selectedCell.col - 1) * 9 + (selectedCell.row - 1);
                        cells[selectedCellIndex] = value;
                    } else {
                        forEach(selectedCells, (cell) => {
                            if (loadedPuzzle.given_digits.charAt(index(cell.col, cell.row)) !== cells[index(cell.col, cell.row)] ||
                                cells[index(cell.col, cell.row)] === "_") {

                                const selectedCellIndex = (cell.col - 1) * 9 + (cell.row - 1);
                                cells[selectedCellIndex] = value;
                            }
                        });
                    }
                    return {
                        ...state,
                        currentDigits: Object.values(cells).join('')
                    }
                }
                case "corner": {
                    if (selectedCell.row !== 10) {
                        return {
                            ...state,
                            cornerDigits: {
                                ...state.cornerDigits,
                                [selectedCell.col]: {
                                ...state.cornerDigits[selectedCell.col],
                                [selectedCell.row]: {
                                    ...state.cornerDigits[selectedCell.col][selectedCell.row],
                                    [value]: !state.cornerDigits[selectedCell.col][selectedCell.row][value]
                                        }
                                    }
                                }
                            }
                        }
                    else {
                        let isAllTrue = true;
                        forEach(selectedCells, (cell) => {
                            const cellCol = cell.col;
                            const cellRow = cell.row;
                            if (!state.cornerDigits[cellCol][cellRow][value]) {
                                isAllTrue = false;
                            }
                        });
                        if (isAllTrue) {
                            forEach(selectedCells, (cell) => {
                                cornerDigits[cell.col][cell.row][value] = false;
                            })
                        } else {
                            forEach(selectedCells, (cell) => {
                                cornerDigits[cell.col][cell.row][value] = true;
                            })
                        }
                        return {
                            ...state,
                            cornerDigits: cornerDigits
                        }
                    }
                }
                case "centre": {
                    if (selectedCell.row !== 10) {
                        return {
                            ...state,
                            centerDigits: {
                                ...state.centerDigits,
                                [selectedCell.col]: {
                                ...state.centerDigits[selectedCell.col],
                                [selectedCell.row]: {
                                    ...state.centerDigits[selectedCell.col][selectedCell.row],
                                    [value]: !state.centerDigits[selectedCell.col][selectedCell.row][value]
                                        }
                                    }
                                }
                            }
                        }
                    else {
                        let isAllTrue = true;
                        forEach(selectedCells, (cell) => {
                            const cellCol = cell.col;
                            const cellRow = cell.row;
                            if (!state.centerDigits[cellCol][cellRow][value]) {
                                isAllTrue = false;
                            }
                        });
                        if (isAllTrue) {
                            forEach(selectedCells, (cell) => {
                                centerDigits[cell.col][cell.row][value] = false;
                            })
                        } else {
                            forEach(selectedCells, (cell) => {
                                centerDigits[cell.col][cell.row][value] = true;
                            });
                        }
                        return {
                            ...state,
                            centerDigits: centerDigits
                        }
                    }
                }
                case "colour": {
                    if (selectedCell.row !== 10) {
                        const selectedCellIndex = (selectedCell.col - 1) * 9 + (selectedCell.row - 1);
                        cellColors[selectedCellIndex] = value === "0" ? "_" : value;
                    } else {
                        forEach(selectedCells, (cell) => {
                            if (loadedPuzzle.given_digits.charAt(index(cell.col, cell.row)) !== cellColors[index(cell.col, cell.row)] ||
                                cellColors[index(cell.col, cell.row)] === "_") {

                                const selectedCellIndex = (cell.col - 1) * 9 + (cell.row - 1);
                                cellColors[selectedCellIndex] = value === "0" ? "_" : value;
                            }
                        });
                    }
                    return {
                        ...state,
                        cellColors: Object.values(cellColors).join('')
                    }
                }
                default:
                    return state
            }
        }
        case types.CELL_VALUE_DELETE: {
            const selectedCell = {...state.selectedCell};
            const selectedCells = [...state.selectedCells];
            const cells = {...state.currentDigits};
            const loadedPuzzle = {...state.loadedPuzzle};
            const cellColors = {...state.cellColors};
            const cornerDigits = {...state.cornerDigits};
            const centerDigits = {...state.centerDigits};

            if (selectedCell.row !== 10) {
                if (cells[index(selectedCell.col, selectedCell.row)] !== "_" && loadedPuzzle["given_digits"].charAt(index(selectedCell.col, selectedCell.row)) === "_") {
                    cells[index(selectedCell.col, selectedCell.row)] = "_";
                    return {
                        ...state,
                        currentDigits: Object.values(cells).join('')
                    }
                }
                else if (state.enterMode === "corner" && hasPencilmark(state.cornerDigits[selectedCell.col][selectedCell.row])) {
                    return {
                        ...state,
                        cornerDigits: {
                            ...state.cornerDigits,
                            [selectedCell.col]: {
                                ...state.cornerDigits[selectedCell.col],
                                [selectedCell.row]: {1: false,
                                    2: false,
                                    3: false,
                                    4: false,
                                    5: false,
                                    6: false,
                                    7: false,
                                    8: false,
                                    9: false}
                            }
                        }
                    }
                }
                else if (state.enterMode === "centre" && hasPencilmark(state.centerDigits[selectedCell.col][selectedCell.row])) {
                    return {
                        ...state,
                        centerDigits: {
                            ...state.centerDigits,
                            [selectedCell.col]: {
                                ...state.centerDigits[selectedCell.col],
                                [selectedCell.row]: {1: false,
                                    2: false,
                                    3: false,
                                    4: false,
                                    5: false,
                                    6: false,
                                    7: false,
                                    8: false,
                                    9: false}
                            }
                        }
                    }
                }
                else if (state.enterMode === "colour" && state.cellColors.charAt(index(selectedCell.col, selectedCell.row)) !== "_") {
                    cellColors[index(selectedCell.col, selectedCell.row)] = "_";
                    return {
                        ...state,
                        cellColors: Object.values(cellColors).join('')
                    };
                }

                else if (hasPencilmark(state.centerDigits[selectedCell.col][selectedCell.row])) {
                    return {
                        ...state,
                        centerDigits: {
                            ...state.centerDigits,
                            [selectedCell.col]: {
                                ...state.centerDigits[selectedCell.col],
                                [selectedCell.row]: {1: false,
                                    2: false,
                                    3: false,
                                    4: false,
                                    5: false,
                                    6: false,
                                    7: false,
                                    8: false,
                                    9: false}
                            }
                        }
                    }
                }
                else if (hasPencilmark(state.cornerDigits[selectedCell.col][selectedCell.row])) {
                    return {
                        ...state,
                        cornerDigits: {
                            ...state.cornerDigits,
                            [selectedCell.col]: {
                                ...state.cornerDigits[selectedCell.col],
                                [selectedCell.row]: {1: false,
                                    2: false,
                                    3: false,
                                    4: false,
                                    5: false,
                                    6: false,
                                    7: false,
                                    8: false,
                                    9: false}
                            }
                        }
                    }
                }
                else if (state.cellColors.charAt(index(selectedCell.col, selectedCell.row)) !== "_") {
                    cellColors[index(selectedCell.col, selectedCell.row)] = "_";
                    return {
                        ...state,
                        cellColors: Object.values(cellColors).join('')
                    };
                }
            }
            else {
                if (isSelectionAllDigits(selectedCells, cells)) {
                    forEach(selectedCells, (cell) => {
                        if (loadedPuzzle["given_digits"].charAt(index(cell.col, cell.row)) === "_") {
                            cells[index(cell.col, cell.row)] = "_";
                        }
                    });
                    return {
                        ...state,
                        currentDigits: Object.values(cells).join('')
                    };
                }
                else if (state.enterMode === "corner" && selectionHasPencilmark(selectedCells, state.cornerDigits)){
                    forEach(selectedCells, (cell) => {
                        cornerDigits[cell.col][cell.row] = {1: false,
                            2: false,
                            3: false,
                            4: false,
                            5: false,
                            6: false,
                            7: false,
                            8: false,
                            9: false}
                    });
                    return {
                        ...state,
                        cornerDigits: cornerDigits
                    };
                }
                else if (state.enterMode === "centre" && selectionHasPencilmark(selectedCells, state.centerDigits)){
                    forEach(selectedCells, (cell) => {
                        centerDigits[cell.col][cell.row] = {1: false,
                            2: false,
                            3: false,
                            4: false,
                            5: false,
                            6: false,
                            7: false,
                            8: false,
                            9: false}
                    });
                    return {
                        ...state,
                        centerDigits: centerDigits
                    };
                }
                else if (state.enterMode === "colour" && selectionHasColor(selectedCells, cellColors)){
                    forEach(selectedCells, (cell) => {
                        cellColors[index(cell.col, cell.row)] = "_";
                    });
                    return {
                        ...state,
                        cellColors: Object.values(cellColors).join('')
                    }
                }
                else if (state.enterMode === "digit" && selectionHasDigit(selectedCells, cells, loadedPuzzle.given_digits)) {
                    forEach(selectedCells, (cell) => {
                        if (loadedPuzzle["given_digits"].charAt(index(cell.col, cell.row)) === "_") {
                            cells[index(cell.col, cell.row)] = "_";
                        }
                    });
                    return {
                        ...state,
                        currentDigits: Object.values(cells).join('')
                    }
                }
                else if (selectionHasDigit(selectedCells, cells, loadedPuzzle.given_digits)) {
                    forEach(selectedCells, (cell) => {
                        if (loadedPuzzle["given_digits"].charAt(index(cell.col, cell.row)) === "_") {
                            cells[index(cell.col, cell.row)] = "_";
                        }
                    });
                    return {
                        ...state,
                        currentDigits: Object.values(cells).join('')
                    }
                }
                else if (selectionHasPencilmark(selectedCells, state.centerDigits)){
                    forEach(selectedCells, (cell) => {
                        centerDigits[cell.col][cell.row] = {1: false,
                            2: false,
                            3: false,
                            4: false,
                            5: false,
                            6: false,
                            7: false,
                            8: false,
                            9: false}
                    });
                    return {
                        ...state,
                        centerDigits: centerDigits
                    };
                }
                else if (selectionHasPencilmark(selectedCells, state.cornerDigits)){
                    forEach(selectedCells, (cell) => {
                        cornerDigits[cell.col][cell.row] = {1: false,
                            2: false,
                            3: false,
                            4: false,
                            5: false,
                            6: false,
                            7: false,
                            8: false,
                            9: false}
                    });
                    return {
                        ...state,
                        cornerDigits: cornerDigits
                    };
                }
                else if (selectionHasColor(selectedCells, state.cellColors)){
                    forEach(selectedCells, (cell) => {
                        cellColors[index(cell.col, cell.row)] = "_";
                    });
                    return {
                        ...state,
                        cellColors: Object.values(cellColors).join('')
                    }
                }
                else {
                    return {
                        ...state
                    };
                }
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
                rating: (action.newRating * 2)
            }
        case types.CHANGE_ENTER_MODE:
            return {...state,
                enterMode: action.mode
            }
        case types.ROTATE_ENTER_MODE: {
            if (state.enterMode === "digit") {
                return {
                    ...state,
                    enterMode: "corner"
                }
            }
            else if (state.enterMode === "corner") {
                return {
                    ...state,
                    enterMode: "centre"
                }
            }
            else if (state.enterMode === "centre") {
                return {
                    ...state,
                    enterMode: "colour"
                }
            }
            else if (state.enterMode === "colour") {
                return {
                    ...state,
                    enterMode: "digit"
                }
            }
        }
        case types.SAVE_PUZZLE_REQUEST: {
            return {
                ...state,
                isSaving: true
            }
        }
        case types.SAVE_PUZZLE_FAILURE: {
            return {
                ...state,
                isSaving: false
            }
        }
        case types.SAVE_PUZZLE_SUCCESS: {
            return {
                ...state,
                isSaving: false
            }
        }
        case types.LOAD_SAVED_SOLUTION: {
            return {
                ...state,
                savedPuzzle: {
                    currentDigits: action.selectedPuzzle.digits,
                    cellColors: action.selectedPuzzle.cell_colors,
                    cornerDigits: action.selectedPuzzle.corner_digits,
                    centerDigits: action.selectedPuzzle.center_digits
                }
            }
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
    changeCellValue: (value) => {
        return {type: types.CELL_VALUE_CHANGE, value}
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
    completePuzzle: () => {
        return {type: types.COMPLETE_PUZZLE_REQUEST}
    },
    changeEnterMode: (mode) => {
        return {type: types.CHANGE_ENTER_MODE, mode}
    },
    rotateEnterMode: () => {
        return {type: types.ROTATE_ENTER_MODE}
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


