import form, {types as formTypes, actions} from "../index";
import {RESET_STATE} from "../../../config/constants";

describe('form reducer', () => {
    it('should return the initial state', () => {
        expect(form(undefined, {})).toEqual({
            values: {},
            fieldErrors: {},
            focus: false
        });
    });

    it('should reset state', () => {
        const action = {
            type: RESET_STATE
        };
        expect(form({values: {name: "puzzleName", rules: "puzzleRules"}}, action)).toEqual({
            values: {},
            fieldErrors: {},
            focus: false
        })
    })

    it('should add field error', () => {
        const action = {
            type: formTypes.ADD_FIELD_ERROR,
            name: "errorName",
            message: "error message"
        };
        expect(form({values: {name: "puzzleName", rules: "puzzleRules"}}, action)).toEqual({
            values: {name: "puzzleName", rules: "puzzleRules"},
            fieldErrors: {errorName: "error message"}
        })
    })

    it('should update value - add value', () => {
        const action = {
            type: formTypes.UPDATE_VALUE,
            name: "fieldName",
            value: "field value"
        };
        expect(form({values: {name: "puzzleName", rules: "puzzleRules"}, fieldErrors: {fieldName: "error message"}}, action)).toEqual({
            values: {name: "puzzleName", rules: "puzzleRules", fieldName: "field value"},
            fieldErrors: {}
        })
    })

    it('should update value - remove value', () => {
        const action = {
            type: formTypes.UPDATE_VALUE,
            name: "fieldName",
        };
        expect(form({values: {name: "puzzleName", rules: "puzzleRules", fieldName: "field value"}, fieldErrors: {fieldName: "error message"}}, action)).toEqual({
            values: {name: "puzzleName", rules: "puzzleRules"},
            fieldErrors: {}
        })
    })

    it('should reset form', () => {
        const action = {
            type: formTypes.RESET_FORM,
        };
        expect(form({values: {name: "puzzleName", rules: "puzzleRules", fieldName: "field value"}, fieldErrors: {fieldName: "error message"}}, action)).toEqual({
            values: {},
            fieldErrors: {},
            focus: false
        })
    })

    it('should reset focus', () => {
        const action = {
            type: formTypes.RESET_FOCUS,
        };
        expect(form({values: {name: "puzzleName", rules: "puzzleRules", fieldName: "field value"}, fieldErrors: {fieldName: "error message"}}, action)).toEqual({
            values: {name: "puzzleName", rules: "puzzleRules", fieldName: "field value"},
            fieldErrors: {fieldName: "error message"},
            focus: false
        })
    })

    it('should reset field errors', () => {
        const action = {
            type: formTypes.RESET_FIELD_ERRORS,
        };
        expect(form({values: {name: "puzzleName", rules: "puzzleRules", fieldName: "field value"}, fieldErrors: {fieldName: "error message"}}, action)).toEqual({
            values: {name: "puzzleName", rules: "puzzleRules", fieldName: "field value"},
        })
    })

    it('should clear values', () => {
        const action = {
            type: formTypes.CLEAR_VALUES,
            valuesToClear: ["name", "rules"]
        };
        expect(form({values: {name: "puzzleName", rules: "puzzleRules", fieldName: "field value"}, fieldErrors: {fieldName: "error message"}}, action)).toEqual({
            values: {fieldName: "field value"},
            fieldErrors: {fieldName: "error message"}
        })
    })

    describe('build puzzle reducer actions', () => {
        it('should send off actions', () => {
            expect(actions.resetForm()).toEqual({
                type: formTypes.RESET_FORM
            })

            expect(actions.update("name", "value")).toEqual({
                type: formTypes.UPDATE_VALUE, name: "name", value: "value"
            })

            expect(actions.addFieldError("name", "value")).toEqual({
                type: formTypes.ADD_FIELD_ERROR, name: "name", message: "value"
            })

            expect(actions.resetFieldErrors()).toEqual({
                type: formTypes.RESET_FIELD_ERRORS
            })

            expect(actions.clearValues("name")).toEqual({
                type: formTypes.CLEAR_VALUES, valuesToClear: "name"
            })
        })
    })
})