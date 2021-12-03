import {expectSaga, testSaga} from "redux-saga-test-plan";
import reducer, {actions} from "..";
import {createModal, destroyModal, watchCreateModal, watchDestroyModal} from "../sagas/control";
import {types as modalTypes} from "../index";

test("createModal - is triggered", () => {
    return expectSaga(watchCreateModal)
        .withReducer(reducer)
        .dispatch({type: modalTypes.CREATE_MODAL})
        .silentRun();
})

test("createModal - execution flow", () => {
    document.body.innerHTML = `
    <TextField id="test-modal" defaultValue="puzzleName"/>`
    ;
    const action = {id: "test-modal"};
    testSaga(createModal, action)
        .next()
        .delay(1).next()


        .isDone()
})

test("destroyModal - is triggered", () => {
    return expectSaga(watchDestroyModal)
        .withReducer(reducer)
        .dispatch({type: modalTypes.DESTROY_MODAL})
        .silentRun();
})

test("destroyModal - execution flow", () => {
    document.body.innerHTML = `
    <TextField id="test-modal" defaultValue="puzzleName"/>`
    ;
    const action = {id: "test-modal"};
    testSaga(destroyModal, action)
        .next()
        .delay(1).next()


        .isDone()
})

describe('modal reducer actions', () => {
    it('should send off actions', () => {
        expect(actions.destroyModal("id")).toEqual({
            type: modalTypes.DESTROY_MODAL, id: "id"
        })

        expect(actions.createModal("name", "value")).toEqual({
            type: modalTypes.CREATE_MODAL, id: "name", attributes: "value"
        })
    })
})