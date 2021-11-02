import forEach from "lodash/forEach";

export const formatDate = date => {
    return date.substring(5, 7) + "/" + date.substring(8, 10) + "/" + date.substring(0, 4);
}

export const formatRating = rating => {
    if (rating.length <= 4) {
        return rating;
    } else {
        return rating.substring(0, 4);
    }
}

export const orderByRows = cells => {
    let cellsByRows = '_________________________________________________________________________________';

    for (let i = 0; i < cells.length; i++) {
        let increase = (Math.floor(i / 9) === Math.floor(i / 10));
        if (increase) {
            if (i % 10 === 0) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 1) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i + 8) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 2) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i + 16) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 3) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i + 24) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 4) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i + 32) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 5) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i + 40) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 6) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i + 48) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 7) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i + 56) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 8) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i + 64) + cellsByRows.substring(i + 1);
            }
        } else {
            if (i % 10 === 0) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 2) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i - 64) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 3) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i - 56) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 4) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i - 48) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 5) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i - 40) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 6) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i - 32) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 7) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i - 24) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 8) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i - 16) + cellsByRows.substring(i + 1);
            } else if (i % 10 === 9) {
                cellsByRows = cellsByRows.substring(0, i) + cells.charAt(i - 8) + cellsByRows.substring(i + 1);
            }
        }
    }

    return cellsByRows;
}

export const orderByCols = cells => {
    let cellsByCols = '_________________________________________________________________________________';

    for (let i = 0; i < cells.length; i++) {
        let increase = (Math.floor(i / 9) === Math.floor(i / 10));
        if (increase) {
            if (i % 10 === 0) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 1) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i + 8) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 2) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i + 16) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 3) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i + 24) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 4) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i + 32) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 5) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i + 40) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 6) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i + 48) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 7) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i + 56) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 8) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i + 64) + cellsByCols.substring(i + 1);
            }
        } else {
            if (i % 10 === 0) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 2) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i - 64) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 3) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i - 56) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 4) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i - 48) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 5) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i - 40) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 6) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i - 32) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 7) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i - 24) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 8) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i - 16) + cellsByCols.substring(i + 1);
            } else if (i % 10 === 9) {
                cellsByCols = cellsByCols.substring(0, i) + cells.charAt(i - 8) + cellsByCols.substring(i + 1);
            }
        }
    }

    return cellsByCols;
}

export function underscoresToZeroes (puzzleString) {
    let returnString = '';
    for (let i = 0; i < puzzleString.length; i++) {
        if (puzzleString.charAt(i) === "_") {
            returnString += "0"
        } else {
            returnString += puzzleString.charAt(i)
        }
    }

    return returnString;
}

export function zeroesToUnderscores (puzzleString) {
    let returnString = '';
    for (let i = 0; i < puzzleString.length; i++) {
        if (puzzleString.charAt(i) === "0") {
            returnString += "_"
        } else {
            returnString += puzzleString.charAt(i)
        }
    }

    return returnString;
}

export function stringsToIntegers (puzzleArray) {
    for (let i = 0; i < puzzleArray.length; i++) {
        puzzleArray[i] = parseInt(puzzleArray[i])
    }
    return puzzleArray;
}

export function atLeast17Givens (puzzleString) {
    let givens = 0;
    for (let i = 0; i < puzzleString.length; i++) {
        if (puzzleString.charAt(i) !== "_") {
            givens ++;
        }
    }

    return givens >= 17;
}

export function index (col, row) {
    return ((col - 1) * 9 + row - 1);
}

export const colorMap = {
    1: "#00000040",
    2: "#00000080",
    3: "#000000",
    4: "#66ff66",
    5: "#ff6600",
    7: "#DC143C",
    6: "#ac00e6",
    8: "#ffff0090",
    9: "#4db8ff",
    0: "#ffffff"
};

export const backgroundColorMap = {
    1: "#00000020",
    2: "#00000060",
    3: "#00000098",
    4: "#66ff6680",
    5: "#ff660080",
    7: "#FC141C80",
    6: "#ac00e680",
    8: "#ffff0070",
    9: "#4db8ff80",
    0: "transparent",
    _: "transparent"
};

export function formatTime (time) {
    const minutes = Math.floor(time / 60);
    const seconds = (time % 60).toString().length === 1 ? "0" + (time % 60).toString() : time % 60;

    return minutes.toString() + ":" + seconds;
}

export function isInt(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) === value &&
        !isNaN(parseInt(value, 10));
}

export function shadeColor(color, percent) {

    let R = parseInt(color.substring(1,3),16);
    let G = parseInt(color.substring(3,5),16);
    let B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;
    G = (G<255)?G:255;
    B = (B<255)?B:255;

    let RR = ((R.toString(16).length===1)?"0"+R.toString(16):R.toString(16));
    let GG = ((G.toString(16).length===1)?"0"+G.toString(16):G.toString(16));
    let BB = ((B.toString(16).length===1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}

export function hasPencilmark(cell) {
    let hasPencilmark = false;
    for (const [key, value] of Object.entries(cell)) {
        if (value) {hasPencilmark = true}
    }
    return hasPencilmark;
}

export function selectionHasPencilmark(selectedCells, cornerDigits) {
    let selectionHasPencilmark = false;
    forEach(selectedCells, (cell) => {
        forEach(cornerDigits[cell.col][cell.row], (value) => {
            if (value) {
                selectionHasPencilmark = true;
            }
        })
    });
    return selectionHasPencilmark;
}

export function selectionHasColor(selectedCells, cells) {
    let selectionHasColor = false;
    forEach(selectedCells, (cell) => {
        if (cells[index(cell.col, cell.row)] !== "_") {
            selectionHasColor = true;
        }
    });
    return selectionHasColor;
}

export function selectionHasDigit(selectedCells, cells, givenDigits) {
    let selectionHasDigit = false;
    forEach(selectedCells, (cell) => {
        if (givenDigits.charAt(index(cell.col, cell.row)) === "_") {
            if (cells[index(cell.col, cell.row)] !== "_") {
                selectionHasDigit = true;
            }
        }
    });
    return selectionHasDigit;
}

export function isSelectionAllDigits(selectedCells, cells) {
    let isSelectionAllDigits = true;
    forEach(selectedCells, (cell) => {
        if (cells[index(cell.col, cell.row)] === "_"){
            isSelectionAllDigits = false;
        }
    });
    return isSelectionAllDigits;
}
