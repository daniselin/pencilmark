export const types = {
    START_TIMER: "timer/START_TIMER",
    STOP_TIMER: "timer/STOP_TIMER",
    TICK: "timer/TICK",
    RESET_TIMER: "timer/RESET_TIMER",
};

export const initialState = {
    time: 0,
    isOn: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.START_TIMER:
            return {
                ...state,
                isOn: true,
                offset: action.offset
            };

        case types.STOP_TIMER:
            return {
                ...state,
                isOn: false
            };

        case types.TICK:
            return {
                ...state,
                time: state.time + 1,
                offset: action.time
            };
        case types.RESET_TIMER:
            return {
                ...initialState
            };

        default:
            return state;
    }
}

export const actions = {
    stopTimer: () => {
        return {type: types.STOP_TIMER}
    },
    startTimer: () => {
        return {type: types.START_TIMER};
    },
    tick: () => {
        return {type: types.TICK};
    },
}