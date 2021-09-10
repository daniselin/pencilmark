export const types = {
    CELL_CLICK: "build-puzzle/CELL_CLICK",
    CELL_VALUE_CHANGE: "build-puzzle/CELL_VALUE_CHANGE"
};

export const initialState = {
        cells: '000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        selectedCell: {
            box: 10,
            cell: 10,
            row: 10,
            col: 10
        }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CELL_CLICK:
            const {box, cell, row, col} = action;
            return {
                ...state,
                selectedCell: {
                    box: box,
                    cell: cell,
                    row: row,
                    col: col
                }
            };
        case types.CELL_VALUE_CHANGE:
            const selectedCell = {...state.selectedCell};
            const cells = {...state.cells};
            const newValue = action.newValue;
            const selectedCellIndex = (selectedCell.box - 1)* 9 + (selectedCell.cell - 1);
            console.log(selectedCellIndex);
            cells[selectedCellIndex] = newValue;

            console.log(Object.values(cells).join(''));

            return {
                ...state,
                cells: Object.values(cells).join('')
            }
        default:
            return state;
    }
};

export const actions = {
    clickCell: (box, cell, row, col) => {
        return {type: types.CELL_CLICK, box, cell, row, col};
    },
    changeCellValue: (newValue) => {
        return {type: types.CELL_VALUE_CHANGE, newValue}
    }
}


String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    return this.substring(0, index) + replacement + this.substring(index + 1);
}