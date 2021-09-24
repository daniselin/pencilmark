export const types = {
    RESET_STATE: "modal/RESET_STATE",
    CREATE_MODAL: "modal/CREATE_MODAL",
    DESTROY_MODAL: "modal/DESTROY_MODAL",
};

export const initialState = {
    show: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.RESET_STATE:
        case types.DESTROY_MODAL:
            return {...initialState};
        case types.CREATE_MODAL:
            return {...state, show: true, showId: action.id, attributes: action.attributes || {}};
        default:
            return state;
    }
};

export const actions = {
    destroyModal: (id) => {
        return {type: types.DESTROY_MODAL, id};
    },
    createModal: (id, attributes) => {
        return {type: types.CREATE_MODAL, id, attributes};
    }
};