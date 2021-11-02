import {
    atLeast17Givens,
    formatDate, formatTime, hasPencilmark, index, isInt, isSelectionAllDigits,
    orderByCols,
    orderByRows, selectionHasColor, selectionHasDigit, selectionHasPencilmark, shadeColor,
    stringsToIntegers,
    underscoresToZeroes,
    zeroesToUnderscores
} from "../../utils";

const orderedByRows =
    "574236918" +
    "831594762" +
    "692781345" +
    "257169483" +
    "416378529" +
    "389425671" +
    "928643157" +
    "163857294" +
    "745912836"

const orderedByCols =
    "586243917" +
    "739518264" +
    "412769835" +
    "257134689" +
    "398672451" +
    "641985372" +
    "973456128" +
    "164827593" +
    "825391746"

test('Reorder puzzle string by columns', () => {
    const output = orderByCols(orderedByRows);
    expect (output).toStrictEqual(orderedByCols);
})

test('Reorder puzzle string by rows', () => {
    const output = orderByRows(orderedByCols);
    expect (output).toStrictEqual(orderedByRows);
})

test('Format date', () => {
    const output = formatDate("2021-10-21");
    expect (output).toStrictEqual("10/21/2021")
})

test('Zeroes to underscores', () => {
    const output = zeroesToUnderscores("000111222");
    expect (output).toStrictEqual("___111222")
})

test('Underscores to zeroes', () => {
    const output = underscoresToZeroes("___111222");
    expect (output).toStrictEqual("000111222")
})

test('Puzzle array strings to integers', () => {
    const output = stringsToIntegers(["0", "1", "8"]);
    expect (output).toEqual([0, 1, 8])
})

test('At least 17 givens', () => {
    const output = atLeast17Givens("1111111888888899999999555555___________");
    expect (output).toBeTruthy();
})

test('index puzzle', () => {
    const output = index(5, 7);
    expect(output).toStrictEqual(42);
});

test('format time', () => {
    const output = formatTime(205);
    expect(output).toStrictEqual("3:25")
})

test('is int', () => {
    const output = isInt(5);
    expect(output).toBeTruthy()
})

test('shade color', () => {
    const output = shadeColor("#a3b15a", 50);
    expect(output).toStrictEqual("#f4ff87");
})

test('has pencilmark', () => {
    const output1 = hasPencilmark({0: true, 1: false});
    const output2 = hasPencilmark({0: false, 1: false});
    expect(output1).toBeTruthy();
    expect(output2).toBeFalsy();
});

test('selection has pencilmark', () => {
    const output1 = selectionHasPencilmark([{col: 1, row: 1}, {col: 1, row: 2}],{1: {1: {0: true, 1: false}, 2 :{0: false, 1: false}}})
    const output2 = selectionHasPencilmark([{col: 1, row: 1}, {col: 1, row: 2}],{1: {1: {0: false, 1: false}, 2 :{0: false, 1: false}}})
    expect(output1).toBeTruthy();
    expect(output2).toBeFalsy();

})

test('selection has color', () => {
    const output1 = selectionHasColor([{col: 1, row: 1}, {col: 1, row: 2}],"1____")
    const output2 = selectionHasColor([{col: 1, row: 1}, {col: 1, row: 2}],"_____")
    expect(output1).toBeTruthy();
    expect(output2).toBeFalsy();
})

test('selection has digit', () => {
    const output1 = selectionHasDigit([{col: 1, row: 1}, {col: 1, row: 2}],"14__3", "1___3")
    const output2 = selectionHasDigit([{col: 1, row: 1}, {col: 1, row: 2}],"1___3", "1___3")
    expect(output1).toBeTruthy();
    expect(output2).toBeFalsy();
})

test('selection is all digits', () => {
    const output1 = isSelectionAllDigits([{col: 1, row: 1}, {col: 1, row: 2}],"14__3");
    const output2 = isSelectionAllDigits([{col: 1, row: 1}, {col: 1, row: 2}],"1___3");
    expect(output1).toBeTruthy();
    expect(output2).toBeFalsy();
})







