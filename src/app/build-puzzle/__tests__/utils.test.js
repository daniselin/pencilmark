import {orderByCols, orderByRows} from "../../utils";

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







