export const formatDate = date => {
    return date.substring(5, 7) + "/" + date.substring(8, 10) + "/" + date.substring(0, 4);
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
        let decrease = (Math.floor(i / 9) === Math.floor(i / 10));
        if (!decrease) {
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
