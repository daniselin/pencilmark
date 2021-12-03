import {orderByCols} from "../../utils";
import {flattenForm, inflateForm} from "../utils";


const formToFlatten = {
    one: {
        two: [
            {
                four: {
                    five: 'five'
                },
                three: 'three'
            },
            {
                "0": "o",
                "1": "n",
                "2": "e"
            }
            ],
        three: 'three'
    }
}

const flattenedForm = {"one.three": "three", "one.two[0].four.five": "five", "one.two[0].three": "three", "one.two[1].0": "o", "one.two[1].1": "n", "one.two[1].2": "e"}
test('flattenForm', () => {
    const output = flattenForm(formToFlatten);
    expect (output).toStrictEqual(flattenedForm);
})

test('inflateForm', () => {
    const output = inflateForm(flattenedForm);
    expect(output).toStrictEqual(formToFlatten);
})