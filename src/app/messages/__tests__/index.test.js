import messages, {types, actions} from "../index";

describe('messages reducer', () => {
    it('should return the initial state', () => {
        expect(messages(undefined, {})).toEqual({
            isLoading: false
        });
    });

    it('should reset messages', () => {
        const action = {
            type: types.RESET_MESSAGES
        }
        expect(messages({errorMessage: 'errorMessage'}, action)).toEqual({
            isLoading: false
        });
    });

    it('should reset error messages', () => {
        const action = {
            type: types.RESET_ERROR_MESSAGE
        }
        expect(messages({errorMessage: 'errorMessage', verifications: 'verifications'}, action)).toEqual({
        });
    });

    it('should reset fatal error messages', () => {
        const action = {
            type: types.RESET_FATAL_ERROR_MESSAGE
        }
        expect(messages({fatalErrorMessage: 'errorMessage', verifications: 'verifications'}, action)).toEqual({
            verifications: 'verifications'
        });
    });

    it('should reset success messages', () => {
        const action = {
            type: types.RESET_SUCCESS_MESSAGE
        }
        expect(messages({successMessage: 'success', verifications: 'verifications'}, action)).toEqual({
            verifications: 'verifications'
        });
    });

    it('should set fatal error', () => {
        const action = {
            type: types.FATAL_ERROR,
            error: {
                message: 'errorMessage'
            }
        }
        expect(messages({successMessage: 'success', verifications: 'verifications'}, action)).toEqual({
            successMessage: 'success',
            verifications: 'verifications',
            fatalErrorMessage: 'errorMessage'
        });
    });

    it('should not set fatal error', () => {
        const action = {
            type: types.FATAL_ERROR,
            error: {
                message: 'errorMessage',
                disableError: true
            }
        }
        expect(messages({successMessage: 'success', verifications: 'verifications'}, action)).toEqual({
            successMessage: 'success',
            verifications: 'verifications'
        });
    });

    it('should set successMessage', () => {
        const action = {
            successMessage: "successMessage",
            section: "messageSection"
        }
        expect(messages({successMessage: 'success', verifications: 'verifications'}, action)).toEqual({
            successMessage: 'successMessage',
            section: 'messageSection'
        });
    });

    it('should set error verifications', () => {
        const action = {
            error: {
                verifications: {value1: 'value1', value2: 'value2'}
            }
        }
        expect(messages({}, action)).toEqual({
            verifications: ['value1', 'value2']
        });
    });

    it('should set error message', () => {
        const action = {
            error: {
                message: 'errorMessage'
            }
        }
        expect(messages({}, action)).toEqual({
            errorMessage: 'errorMessage'
        });
    });

    describe('message reducer actions', () => {
        it('should send off actions', () => {
            expect(actions.resetSuccessMessage()).toEqual({
                type: types.RESET_SUCCESS_MESSAGE
            })

            expect(actions.resetErrorMessage()).toEqual({
                type: types.RESET_ERROR_MESSAGE
            })

            expect(actions.resetFatalErrorMessage()).toEqual({
                type: types.RESET_FATAL_ERROR_MESSAGE
            })
        });

    })
});