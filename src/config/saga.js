import { all } from "redux-saga/effects"
import { union } from "lodash"
import user from "../app/user/sagas/user";

export default function* createRootSaga() {
    yield all(
        union(
            user()
        )
    );
}