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