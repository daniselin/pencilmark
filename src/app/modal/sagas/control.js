import {delay, takeEvery} from "redux-saga/effects";
import {types as modalTypes} from "../../modal"

export function* watchCreateModal() {
    yield takeEvery(modalTypes.CREATE_MODAL, createModal);
}

export function* createModal(action) {
    const {id} = action;
    if(document.getElementById(id)) {
        document.getElementById(id).style.display = "block";
    }
    yield delay(1);
}

export function* watchDestroyModal() {
    yield takeEvery(modalTypes.DESTROY_MODAL, destroyModal);
}

export function* destroyModal(action) {
    yield delay(1);
    const {id} = action;
    if(document.getElementById(id)) {
        document.getElementById(id).style.display = "none";
    }
}

export default () => [
    watchCreateModal(),
    watchDestroyModal()
];


